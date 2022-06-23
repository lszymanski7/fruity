import React, { useState, useEffect } from 'react'
import Draw from './Draw'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'
import fruitsDictionary from '../dictionary/fruits'
import useLocalStorage from '../hooks/useLocalStorage'

const Fruity = () => {
    const [fruits, setFruits] = useLocalStorage('fruits', fruitsDictionary)
    const [selectedFruit, setSelectedFruit] = useState(undefined)
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = (fruit) => {
        setSelectedFruit(fruit)
        setIsOpen(true)
    }
    
    const closeModal = () => {
        setSelectedFruit(undefined)
        setIsOpen(false)
    }
    
    const handleDraw = () => {
		const rand = Math.floor(Math.random() * fruits.length)
        openModal(fruits[rand])
	}

    useEffect(() => {
        setFruits(fruitsDictionary)
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