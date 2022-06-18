import React, { useEffect } from 'react'
import Draw from './Draw'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'

import fruits from '../dictionary/fruits'

const Fruity = () => {
    const handleDraw = () => {
		const rand = Math.floor(Math.random() * fruits.length)
        console.log(rand)
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
            <Modal />
        </div>
    ) 
}

export { Fruity as default }