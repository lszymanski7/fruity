import React from 'react'
import { logo } from '../assets/icons/icons-import'

const Header = () => {
	const title = 'Fruity'
    const subtitle = `Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? You don't have to worry about it anymore!`

	return (
		<div className="header">
			<div className="header__container">
				<div>
					<img className="header__logo" src={logo} alt="Fruity Logo" />
				</div>
				<div>
					<h1 className="header__title">{title}</h1>
					<h2 className="header__subtitle">{subtitle}</h2>
				</div>
			</div>
		</div>
	)
}

export { Header as default }