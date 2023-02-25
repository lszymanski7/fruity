/* istanbul ignore file */

import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import useLocalStorage from '../hooks/useLocalStorage'

// Function ➞ creates theme context
const ThemeContext = createContext()

// Function ➞ creates theme provider
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    const toggleTheme = () => {
        const nextState = theme === 'dark' ? 'light' : 'dark'
        setTheme(nextState)
    }

    useEffect(() => {
        switch (theme) {
            case 'dark':
                document.body.className = 'theme-dark'
                break
            case 'light':
                document.body.className = 'theme-light'
                break
            default:
                throw new Error(`Unhandled theme: ${theme}`)
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export { ThemeContext, ThemeProvider }
