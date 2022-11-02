import React from 'react'
import { logo } from '../data/constants'

const Header = () => {
    const title = 'Fruity'
    const subtitle = `Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? Don't worry about that anymore! Just click the button below!`

    return (
        <header className="header">
            <div className="flexbox-column header__container">
                <div className="flexbox-row">
                    <img
                        alt="Fruity Logo"
                        className="header__logo"
                        src={logo.size_512x512}
                    />
                    <h1 className="header__title">{title}</h1>
                </div>
                <h2 className="header__subtitle">{subtitle}</h2>
            </div>
        </header>
    )
}

export { Header as default }
