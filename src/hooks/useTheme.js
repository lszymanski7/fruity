import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'

// Function ➞ returns context for dark and light theme
const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error(`React hook 'useTheme' must be used within a ThemeProvider!`)
    }

    return context
}

export { useTheme as default }
