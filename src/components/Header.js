import React from 'react'
import { logo } from '../assets/importFiles'

const Header = () => {
	const title = 'Fruity'
	const subtitle = `Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? Don't worry about that anymore! Just click the button below!`

	return (
		<div className="header">
			<div className="container">
				<div className="header-container">
					<img className="header__logo" src={logo.outlined512} alt="Fruity Logo" />
					<h1 className="header__title">{title}</h1>
				</div>
				<div>
					<h2 className="header__subtitle">{subtitle}</h2>
				</div>
			</div>
		</div>
	)
}

export { Header as default }
