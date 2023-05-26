/* istanbul ignore file */

import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'

// React Hook ➞ dark and light theme
const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error(`React hook 'useTheme' must be used within a ThemeProvider!`)
    }

    return context
}

export default useTheme
