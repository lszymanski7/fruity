import React, { useState, useEffect } from 'react'
import Draw from './Draw'
import FruitsList from './FruitsList'
import FruitsModal from './FruitsModal'
import Header from './Header'
import fruits from '../dictionary/fruits'

const FruityApp = () => {
    const [fruit, setFruit] = useState()

    const handleDraw = () => {
		const rand = Math.floor(Math.random() * fruits.length)
		setFruit(fruits[rand])
        console.log(fruit)
	}

    // Save initialization data to localStorage 
    useEffect(() => {
		try {
			const dataJSON = localStorage.getItem('fruits')

			if (!dataJSON) {
				localStorage.setItem('fruits', JSON.stringify(fruits))
			}
		} catch (e) {
			console.log('Error:', e)
		}	
	}, [])

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