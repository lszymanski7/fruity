import React, { useState, useEffect } from 'react'
import Board from './Board'
import Draw from './Draw'
import Header from './Header'
import Modal from './Modal'
import fruits from '../data/fruits'

const App = () => {
    /* istanbul ignore next */

    // Default values
    const defaultData = () => {
        if (window.localStorage.getItem('fruits') === null) {
            return fruits
        } else {
            return JSON.parse(window.localStorage.getItem('fruits'))
        }
    }
    const defaultSelected = null
    const defaultIsOpen = false
    const defaultAnimation = null

    // Application states
    const [data, setData] = useState(defaultData)
    const [selected, setSelected] = useState(defaultSelected)
    const [isOpen, setIsOpen] = useState(defaultIsOpen)
    const [animation, setAnimation] = useState(defaultAnimation)

    // Array method ➞ filter that returns only checked fruits
    const filteredData = data.filter((fruit) => fruit.checked === true)

    /* istanbul ignore next */

    // Function ➞ opens the modal
    const openModal = (fruit) => {
        setSelected(fruit)
        setIsOpen(true)
    }

    /* istanbul ignore next */

    // Function ➞ closes the modal
    const closeModal = () => {
        setSelected(defaultSelected)
        setIsOpen(false)
    }

    /* istanbul ignore next */

    // Function ➞ updates the reset button animation
    const updateAnimation = () => {
        setAnimation('spin')
        setTimeout(() => {
            setAnimation('')
        }, 300)
    }

    /* istanbul ignore next */

    // Function ➞ checks/unchecks a fruit
    const handleCheck = (id) => {
        const nextState = data.map((fruit) => {
            if (fruit.id === id) {
                fruit.checked = !fruit.checked
                return fruit
            } else {
                return fruit
            }
        })
        setData(nextState)
    }

    /* istanbul ignore next */

    // Function ➞ draws a fruit
    const handleDraw = () => {
        const rand = Math.floor(Math.random() * filteredData.length)
        openModal(filteredData[rand])
    }

    /* istanbul ignore next */

    // Function ➞ unchecks all fruits
    const handleReset = () => {
        const nextState = data.map((fruit) => ({ ...fruit, checked: false }))
        setData(nextState)
        updateAnimation()
    }

    /* istanbul ignore next */

    // Effect ➞ saves data in local storage if the key does not exist (key: 'fruits')
    useEffect(() => {
        if (window.localStorage.getItem('fruits') === null) {
            window.localStorage.setItem('fruits', JSON.stringify(fruits))
        }
    }, [])

    /* istanbul ignore next */

    // Effect ➞ updates data in local storage whenever it changes (key: 'fruits')
    useEffect(() => {
        window.localStorage.setItem('fruits', JSON.stringify(data))
    }, [data])

    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <Board
                data={data}
                handleCheck={handleCheck}
            />
            <Draw
                animation={animation}
                disabled={filteredData.length < 2}
                handleDraw={handleDraw}
                handleReset={handleReset}
            />
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                selected={selected}
            />
        </div>
    )
}

export { App as default }
