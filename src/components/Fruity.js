import React, { useState, useEffect } from 'react'
import Draw from './Draw'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Widget from './Widget'
import fruitsData from '../data/fruits'
import useLocalStorage from '../hooks/useLocalStorage'

const Fruity = () => {
	const [fruits, setFruits] = useLocalStorage('fruits', fruitsData)
	const [filteredFruits, setFilteredFruits] = useState(fruits.filter((fruit) => fruit.checked === true))
	const [selectedFruit, setSelectedFruit] = useState(undefined)
	const [isOpenModal, setIsOpenModal] = useState(false)

	const openModal = (fruit) => {
		setSelectedFruit(fruit)
		setIsOpenModal(true)
	}

	const closeModal = () => {
		setSelectedFruit(undefined)
		setIsOpenModal(false)
	}

	const handleDraw = () => {
		const rand = Math.floor(Math.random() * filteredFruits.length)
		openModal(filteredFruits[rand])
	}

	useEffect(() => {
		if (window.localStorage.getItem('fruits') === null) {
			setFruits(fruitsData)
		}
  		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			<Header />
			<div className="container">
				<Widget
					fruits={fruits}
					setFruits={setFruits}
					setFilteredFruits={setFilteredFruits}
				/>
				<Draw
					filteredFruits={filteredFruits}
					handleDraw={handleDraw} 
				/>
			</div>
			<Modal
				selectedFruit={selectedFruit}
				isOpenModal={isOpenModal}
				closeModal={closeModal}
			/>
			<Footer />
		</div>
	)
}

export { Fruity as default }
