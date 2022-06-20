import React from 'react'

const Item = (props) => {
    const { id, name, img, checked } = props
    const icon = checked ? img.color : img.linear

    const handleCheck = () => {
        const dataJSON = localStorage.getItem('fruits')
        const data = JSON.parse(dataJSON)
        const itemek = data.find(item => item.id === id)
        console.log(itemek)
        itemek.checked = !itemek.checked
        console.log(itemek)
    }

    return (
        <div>
            <img id={id} src={icon} alt={name} width="75px" height="75px" onClick={handleCheck} />
            <p>{name}</p>
		</div>
    ) 
}

export { Item as default }