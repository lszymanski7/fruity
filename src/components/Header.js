import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { LOGOS } from '../data/constants'

const Header = () => {
    // Application name
    const name = 'FRUITY'

    // Toggle switch states for dark and light mode
    const [isChecked, setIsChecked] = useState(false)

    return (
        <header className="flexbox-column header">
            <div className="flexbox-row header__widgets-container">
                <a href="https://github.com/lszymanski7/fruity-app">
                    <img
                        alt="GitHub Logo"
                        className="header__github-logo"
                        src={LOGOS.github}
                    />
                </a>
                <ToggleSwitch
                    handleOnChange={() => setIsChecked(!isChecked)}
                    icons={['moon-icon', 'sun-icon']}
                    id="theme-switcher"
                    isChecked={isChecked}
                />
            </div>
            <div className="flexbox-row header__brand-container">
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
