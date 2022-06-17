import React from 'react'
import FruitsItem from './FruitsItem'
import fruits from '../dictionary/fruits'

const FruitsList = () => {
    const title = 'Your fruits'

    return (
        <div className="container">
            <div>
			    <h3>{title}</h3>
            </div>
            {
                fruits.map(
                    (fruit) => fruit.checked ?
                        <FruitsItem key={fruit.id} id={fruit.id} img={fruit.img.color} name={fruit.name} />
                    :
                        <FruitsItem key={fruit.id} id={fruit.id} img={fruit.img.linear} name={fruit.name} />
                )
            }
		</div>
    )
}

export { FruitsList as default }