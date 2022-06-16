import React from 'react'

const FruitsItem = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.name} width="75px"  height="75px" />
            <p>{props.name}</p>
		</div>
    ) 
}

export { FruitsItem as default }