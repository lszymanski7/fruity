import React from 'react'

const Item = ({ id, name, img, checked }) => {
    const icon = checked ? img.color : img.linear

    const handleCheck = () => {
        console.log(name)
    }

    return (
        <div>
            <img id={id} src={icon} alt={name} width="75px" height="75px" onClick={handleCheck} />
            <p>{name}</p>
		</div>
    ) 
}

export { Item as default }