import React, { useState, useEffect } from 'react'
import Draw from './Draw'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'

import fruits from '../dictionary/fruits'

const Fruity = () => {
    const [selectedFruit, setSelectedFruit] = useState(undefined)
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setSelectedFruit(undefined)
        setIsOpen(false)
    }
    
    const handleDraw = () => {
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
                    <Widget />
                </div>
                <Draw handleDraw={handleDraw} />
            </div>
            <Modal selectedFruit={selectedFruit} modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
    ) 
}

export { Fruity as default }