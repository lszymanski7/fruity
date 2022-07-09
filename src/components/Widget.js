import React from 'react'
import Item from './Item'

const Widget = (props) => {
    const title = 'Fruits to select:'
    const { fruits, setFruits, setFilteredFruits } = props

    return (
        <div className="widget">
            <div className="widget-header">
                <h2>{title}</h2>
            </div>
            <div className="widget-container">
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
            </div>
		</div>
    )
}

export { Widget as default }
