import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
	
	// Fetch data from localStorage
	const getData = () => {
		if (typeof window === 'undefined') {
			return initialValue
		}

		try {
			const data = window.localStorage.getItem(key)
			return data ? JSON.parse(data) : initialValue
		} catch (e) {
			console.log(`Error getting localStorage key ('${key}'):`, e)
			return initialValue
		}
	}

	const [storedData, setStoredData] = useState(getData)

	// Save data to localStorage
	const setData = (value) => {
		try {
			setStoredData(value)
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(value))
			}
		} catch (e) {
			console.log(`Error setting localStorage key ('${key}'):`, e)
		}
	}

	return [storedData, setData]
}

export { useLocalStorage as default }
