import React, { useState, useEffect } from 'react'
import Draw from './Draw'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'
import { fruits } from '../data/constants'

const App = () => {
    /* istanbul ignore next */
    const [data, setData] = useState(() => {
        const storage = window.localStorage.getItem('fruits')
        return storage === null ? fruits : JSON.parse(storage)
    })
    const [selected, setSelected] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const filteredData = data.filter((fruit) => fruit.checked === true)

    /* istanbul ignore next */
    const openModal = (fruit) => {
        setSelected(fruit)
        setIsOpen(true)
    }

    /* istanbul ignore next */
    const closeModal = () => {
        setSelected(null)
        setIsOpen(false)
    }

    /* istanbul ignore next */
    const handleCheck = (id) => {
        const newData = data.map((fruit) => ({ ...fruit }))
        const index = newData.findIndex((fruit) => fruit.id === id)
        newData[index].checked = !newData[index].checked
        setData(newData)
    }

    /* istanbul ignore next */
    const handleDraw = () => {
        const rand = Math.floor(Math.random() * filteredData.length)
        openModal(filteredData[rand])
    }

    /* istanbul ignore next */
    const handleReset = () => {
        const newData = data.map((fruit) => ({ ...fruit, checked: false }))
        setData(newData)
    }

    /* istanbul ignore next */
    useEffect(() => {
        const storage = window.localStorage.getItem('fruits')

        if (storage === null) {
            window.localStorage.setItem('fruits', JSON.stringify(fruits))
        }
    }, [])

    /* istanbul ignore next */
    useEffect(() => {
        window.localStorage.setItem('fruits', JSON.stringify(data))
    }, [data])

    return (
        <div className="flexbox-column fullscreen">
            <Header />
            <div>
                <Widget
                    data={data}
                    handleCheck={handleCheck}
                    handleReset={handleReset}
                />
                <Draw
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
