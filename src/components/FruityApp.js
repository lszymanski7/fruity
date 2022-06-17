import React, { useState } from 'react'
import Draw from './Draw'
import FruitsList from './FruitsList'
import FruitsModal from './FruitsModal'
import Header from './Header'
import fruits from '../dictionary/fruits'

const FruityApp = () => {
    console.log(fruits)
    const [fruit, setFruit] = useState()

    const handleDraw = () => {
		const rand = Math.floor(Math.random() * fruits.length)
		setFruit(fruits[rand])
        console.log(fruit)
	}
	
    return (
        <div>
            <Header />
            <div className="container">
                <div className="widget">
                    <FruitsList />
                </div>
                <Draw handleDraw={handleDraw} />
            </div>
            <FruitsModal />
        </div>
    ) 
}

export { FruityApp as default }