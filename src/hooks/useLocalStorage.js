import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {

    // Fetch data from localStorage
    const getValue = () => {
        if (typeof window === 'undefined') {
            return initialValue
        }

        try {
            const value = window.localStorage.getItem(key)
            return value ? JSON.parse(value) : initialValue
        } catch (error) {
            console.log(`Error getting localStorage key ('${key}'):`, error)
            return initialValue
        }
    }

	const [storedValue, setStoredValue] = useState(getValue)

    // Save data to localStorage
    const setValue = (value) => {
        try {
			const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.log(`Error setting localStorage key ('${key}'):`, error)
        }
    }

    return [storedValue, setValue]
}

export { useLocalStorage as default }
