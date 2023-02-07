import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import { LOGOS } from '../data/constants'
import useTheme from '../hooks/useTheme'

const Header = () => {
    // Application name
    const name = 'FRUITY'

    // Context value for dark and light theme
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="header">
            <div className="header__widgets-container">
                <a href="https://github.com/lszymanski7/fruity-app">
                    <img
                        alt="GitHub Logo"
                        className={`header__github-logo header__github-logo--${theme}`}
                        src={LOGOS.github}
                    />
                </a>
                <ToggleSwitch
                    handleOnChange={toggleTheme}
                    isChecked={theme === 'dark'}
                />
            </div>
            <div className="header__brand-container">
                <img
                    alt="Application Logo"
                    className="header__app-logo"
                    src={LOGOS.fruity.size_256x256}
                />
                <h1 className="header__app-name">{name}</h1>
            </div>
        </header>
    )
}

export { Header as default }
