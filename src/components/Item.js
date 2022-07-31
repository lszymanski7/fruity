import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Item = (props) => {
	const { id, name, img, checked, fruits, setFruits, setFilteredFruits } = props
	const [icon, setIcon] = useState(checked ? img.color : img.linear)
	const fruitsData = JSON.parse(JSON.stringify(fruits))

	const handleCheck = () => {
		const fruit = fruitsData.find((fruit) => fruit.id === id)
		fruit.checked = !fruit.checked
		setFruits(fruitsData)
		setIcon(fruit.checked ? img.color : img.linear)
		setFilteredFruits(fruitsData.filter((fruit) => fruit.checked === true))
	}

	return (
		<div className="item">
			<img className="item__image" id={id} src={icon} alt={name} onClick={handleCheck} />
			<p className="item__title">{name}</p>
		</div>
	)
}

Item.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.object.isRequired,
	checked: PropTypes.bool.isRequired,
	fruits: PropTypes.array.isRequired,
	setFruits: PropTypes.func.isRequired,
	setFilteredFruits: PropTypes.func.isRequired
}

export { Item as default }
