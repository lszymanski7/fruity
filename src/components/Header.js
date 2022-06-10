import React from 'react'
import logo from '../../public/images/favicon.png'

const Header = () => {
	const title = 'Fruity'
    const subtitle = `Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? You don't have to worry about it anymore!`

	return (
		<header className="header">
				<div className="container__header">
					<div>
						<img className="header__logo" src={logo} alt="Fruity Logo" />
					</div>
					<div>
						<h1 className="header__title">{title}</h1>
						<h2 className="header__subtitle">{subtitle}</h2>
					</div>
				</div>
		</header>
	)
}

export { Header as default }