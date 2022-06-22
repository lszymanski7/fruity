import React, { useState, useEffect } from 'react'
import Draw from './Draw'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'

import fruitsDictionary from '../dictionary/fruits'

const Fruity = () => {
    const [fruits, setFruits] = useState(undefined)
    const [selectedFruit, setSelectedFruit] = useState(undefined)
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setIsOpen(false)
    }
    
    const handleDraw = () => {
        
        console.log(fruits)
		const rand = Math.floor(Math.random() * fruits.length) // fruits.length to change | data from localStorage instead of dictionary
        const fruit = fruits[rand] // fruits[rand] to change | data from localStorage instead of dictionary
        setSelectedFruit(fruit)
        openModal()
	}

    // Save initialization data to localStorage 
    useEffect(() => {
        const dataJSON = localStorage.getItem('fruits')

		try {
			if (dataJSON === null) {
				localStorage.setItem('fruits', JSON.stringify(fruitsDictionary))
			}
		} catch (e) {
			console.log('Error:', e)
        }
	}, [])

    // Save initialization data to localStorage 
    useEffect(() => {
        const dataJSON = localStorage.getItem('fruits')
        setFruits(JSON.parse(dataJSON))
	}, [])

    return (
        <div>
            <Header />
            <div className="container">
                <div className="widget">
                    <Widget fruits={fruits} />
                </div>
                <Draw handleDraw={handleDraw} />
            </div>
            <Modal selectedFruit={selectedFruit} modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
    ) 
}

export { Fruity as default }