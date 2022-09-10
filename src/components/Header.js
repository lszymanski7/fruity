import React from 'react'
import { logo } from '../data/constants'

const Header = () => {
    const title = 'Fruity'
    const subtitle = 'Click the button below and draw your fruit!'

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-container2">
                    <img alt="Fruity Logo" className="header__logo" src={logo.size_512x512} />
                    <h1 className="header__title">{title}</h1>
                </div>
                <h2 className="header__subtitle">{subtitle}</h2>
            </div>
        </header>
    )
}

export { Header as default }
