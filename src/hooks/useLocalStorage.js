/* istanbul ignore file */

import { useState } from 'react'

// React Hook ➞ localStorage
const useLocalStorage = (key, initalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            console.warn('The code is running in a server-side environment!')
            return initalValue
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initalValue
        } catch (error) {
            console.error(`Error getting localStorage key ('${key}'):`, error)
            return initalValue
        }
    })

    const setValue = (value) => {
        try {
            const newValue = value instanceof Function ? value(storedValue) : value
            setStoredValue(newValue)

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(newValue))
            }
        } catch (error) {
            console.error(`Error setting localStorage key ('${key}'):`, error)
        }
    }

    return [storedValue, setValue]
}

export { useLocalStorage as default }
