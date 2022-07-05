import React from 'react'
import Item from './Item'

const Widget = (props) => {
    const title = 'Your Fruits'
    const { fruits, setFruits, filteredFruits, setFilteredFruits } = props

    return (
        <div className="widget">
            <h3 className="widget-header">{title}</h3>
            {
                fruits.map((fruit) => { 
                    const key = fruit.name.toLowerCase().replace(' ', '-')

                    return (
                        <Item 
                            key={key} 
                            id={fruit.id} 
                            name={fruit.name} 
                            img={fruit.img} 
                            checked={fruit.checked} 
                            fruits={fruits} 
                            setFruits={setFruits}
                            setFilteredFruits={setFilteredFruits}
                        />
                    )
                })
            }
            {filteredFruits.length < 2 && <p className="widget__message">Select at least two fruits to get started!</p>}
		</div>
    )
}

export { Widget as default }