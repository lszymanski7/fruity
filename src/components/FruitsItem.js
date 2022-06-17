import React from 'react'
import fruits from '../dictionary/fruits'

const FruitsItem = (props) => {
    const handleCheck = (e) => {
        // const fruit = fruits.filter((element) => element.name === name)
        // console.log(fruit)
        console.log(e)
        console.log(props.name)
    }

    return (
        <div>
            <img id={props.id} src={props.img} alt={props.name} width="75px"  height="75px" onClick={handleCheck} />
            <p>{props.name}</p>
		</div>
    ) 
}

export { FruitsItem as default }