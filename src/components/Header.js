import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { logos } from '../data/constants'

const Header = () => {
    // Application title
    const title = 'FRUITY'

    // Toggle switch states for dark and light mode
    const [isChecked, setIsChecked] = useState(false)

    return (
        <header className="flexbox-column header">
            <div className="flexbox-row header__container-one">
                <a href="https://github.com/lszymanski7/fruity-app">
                    <img
                        alt="GitHub Logo"
                        className="header__github"
                        src={logos.github}
                    />
                </a>
                <ToggleSwitch
                    handleOnChange={() => setIsChecked(!isChecked)}
                    icons={['moon-icon', 'sun-icon']}
                    id="themeSwitcher"
                    isChecked={isChecked}
                />
            </div>
            <div className="flexbox-row header__container-two">
                <img
                    alt="Fruity Logo"
                    className="header__logo"
                    src={logos.fruity.size_256x256}
                />
                <h1 className="header__title">{title}</h1>
            </div>
        </header>
    )
}

export { Header as default }
