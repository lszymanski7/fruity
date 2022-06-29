import React from 'react'
import Item from './Item'

const Widget = (props) => {
    const title = 'Select fruits:'
    const { fruits, setFruits } = props

    return (
        <div className="container">
            <div>
			    <h3>{title}</h3>
            </div>
            {
                fruits.map((fruit) => { 
                    const key = fruit.name.toLowerCase().replace(' ', '_')
                    return (
                        <Item 
                            key={key} 
                            id={fruit.id} 
                            name={fruit.name} 
                            img={fruit.img} 
                            checked={fruit.checked} 
                            fruits={fruits} 
                            setFruits={setFruits}  
                        />
                    )
                })
            }
		</div>
    )
}

export { Widget as default }