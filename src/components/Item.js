import React, { useState }  from 'react'

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
            <p className="item__name">{name}</p>
		</div>
    ) 
}

export { Item as default }