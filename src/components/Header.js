import React from 'react'
import logo from '../../public/images/favicon.png'

const Header = (props) => {
	return (
		<header className="header">
				<div className="container">
					<div>
						<img className="header__logo" src={logo} alt="Fruity Logo" />
					</div>
					<div>
						<h1 className="header__title">{props.title}</h1>
						<h2 className="header__subtitle">{props.subtitle}</h2>
					</div>
				</div>
		</header>
	)
}

export { Header as default }