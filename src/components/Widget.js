import React from 'react'
import Item from './Item'

const Widget = (props) => {
    const title = 'Your fruits'
    const { fruits } = props

    return (
        <div className="container">
            <div>
			    <h3>{title}</h3>
            </div>
            { 
                fruits === undefined ? <p>Loading...</p> : fruits.map(
                    (fruit) => <Item key={fruit.id} id={fruit.id} img={fruit.img} name={fruit.name} checked={fruit.checked} />
                )
            }
		</div>
    )
}

export { Widget as default }