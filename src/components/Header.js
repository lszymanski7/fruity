import React from 'react'
import logo from '../../public/images/favicon.png'

const Header = () => (
	<header className="header">
			<div className="container">
				<div>
					<img className="header__logo" src={logo} alt="Fruity Logo" />
				</div>
				<div>
					<h1 className="header__title">Fruity</h1>
					<h2 className="header__subtitle">Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? You don't have to worry about it anymore!</h2>
				</div>
			</div>
	</header>
)

export default Header