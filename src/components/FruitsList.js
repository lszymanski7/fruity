import React from 'react'
import FruitsItem from './FruitsItem'
import fruits from '../dictionary/fruits'

const FruitsList = () => {
    console.log(fruits)

    return (
        // <div className="container__list">
        //     <FruitsItem />
        // </div>

        <div>
		    <div className="widget-header">
			    <h3 className="widget-header__title">Your Fruits</h3>
                <img src={fruits[0].img[0].default} />
            </div>
		</div>
    ) 
}

export { FruitsList as default }