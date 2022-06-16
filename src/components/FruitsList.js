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
                    (fruit) => <FruitsItem key={fruit.name.toLowerCase()} img={fruit.img[0]} name={fruit.name} />
                )
            }
		</div>
    )
}

export { FruitsList as default }