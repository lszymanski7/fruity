import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Item = ({ checked, fruits, id, img, name, setFilter, setFruits }) => {
    const [icon, setIcon] = useState(checked ? img.color : img.linear)
    const data = JSON.parse(JSON.stringify(fruits))
    const fruit = data.find((fruit) => fruit.id === id)

    const handleCheck = () => {
        fruit.checked = !fruit.checked
        setIcon(fruit.checked ? img.color : img.linear)
        setFilter(data.filter((fruit) => fruit.checked === true))
        setFruits(data)
    }

    return (
        <div className="item">
            <img
                alt={name}
                className="item__image"
                id={id}
                onClick={handleCheck}
                src={icon}
            />
            <h3 className="item__title">{name}</h3>
        </div>
    )
}

Item.propTypes = {
    checked: PropTypes.bool.isRequired,
    fruits: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    setFruits: PropTypes.func.isRequired
}

export { Item as default }
