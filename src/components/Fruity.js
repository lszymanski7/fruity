/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'
import { data } from '../data/constants'
import useLocalStorage from '../hooks/useLocalStorage'

const Fruity = () => {
    const [fruits, setFruits] = useLocalStorage('fruits', data)
    const [filter, setFilter] = useState(fruits.filter((fruit) => fruit.checked === true))
    const [selectedFruit, setSelectedFruit] = useState(undefined)
    const [isOpen, setIsOpen] = useState(false)

    const openModal = (fruit) => {
        setSelectedFruit(fruit)
        setIsOpen(true)
    }

    const closeModal = () => {
        setSelectedFruit(undefined)
        setIsOpen(false)
    }

    const handleDraw = () => {
        const rand = Math.floor(Math.random() * filter.length)
        openModal(filter[rand])
    }

    useEffect(() => {
        if (window.localStorage.getItem('fruits') === null) {
            setFruits(fruits)
        }
    }, [])

    return (
        <div className="flexbox-fullscreen">
            <Header />
            <div className="flexbox-container">
                <Widget
                    fruits={fruits}
                    setFilter={setFilter}
                    setFruits={setFruits}
                /> 
                <Button
                    disabled={filter.length < 2}
                    onClick={handleDraw}
                />
            </div>
            <Footer />
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                selectedFruit={selectedFruit}
            />
        </div>
    )
}

export { Fruity as default }
