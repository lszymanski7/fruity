/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'
import { fruits } from '../data/constants'

const App = () => {
    const storage = localStorage.getItem('fruits')
    const initialValue = storage === null ? fruits : JSON.parse(storage)
    const [data, setData] = useState(initialValue)
    const [selected, setSelected] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const filteredData = data.filter((fruit) => fruit.checked === true)

    const openModal = (fruit) => {
        setSelected(fruit)
        setIsOpen(true)
    }

    const closeModal = () => {
        setSelected(null)
        setIsOpen(false)
    }

    const handleCheck = (id) => {
        const newData = data.map((fruit) => ({ ...fruit }))
        const index = newData.findIndex((fruit) => fruit.id === id)
        newData[index].checked = !newData[index].checked
        setData(newData)
    }

    const handleDraw = () => {
        const rand = Math.floor(Math.random() * filteredData.length)
        openModal(filteredData[rand])
    }

    const handleReset = () => {
        const newData = data.map((fruit) => ({ ...fruit, checked: false }))
        setData(newData)
    }

    useEffect(() => {
        if (storage === null) {
            localStorage.setItem('fruits', JSON.stringify(fruits))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('fruits', JSON.stringify(data))
    }, [data])

    return (
        <div className="flexbox-fullscreen">
            <Header />
            <div className="flexbox-container">
                <Widget
                    data={data}
                    handleCheck={handleCheck}
                    handleReset={handleReset}
                />
                <Button
                    disabled={filteredData.length < 2}
                    handleDraw={handleDraw}
                />
            </div>
            <Footer />
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                selected={selected}
            />
        </div>
    )
}

export { App as default }
