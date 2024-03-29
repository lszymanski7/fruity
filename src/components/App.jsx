import React, { useState } from 'react'
import Board from './Board'
import Draw from './Draw'
import Header from './Header'
import Modal from './Modal'
import fruits from '../data/fruits'
import useLocalStorage from '../hooks/useLocalStorage'

const App = () => {
  /* istanbul ignore next */

  // Application states
  const [data, setData] = useLocalStorage('fruits', fruits)
  const [selected, setSelected] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [animation, setAnimation] = useState(null)

  // Array method ➞ filter that returns only checked fruits
  const checkedFruits = data.filter((fruit) => fruit.checked === true)

  /* istanbul ignore next */

  // Function ➞ opens the modal
  const openModal = () => {
    setIsOpen(true)
  }

  /* istanbul ignore next */

  // Function ➞ closes the modal
  const closeModal = () => {
    setIsOpen(false)
  }

  /* istanbul ignore next */

  // Function ➞ resets the selected fruit after closing the modal
  const afterCloseModal = () => {
    setSelected(null)
  }

  /* istanbul ignore next */

  // Function ➞ updates the reset button animation
  const updateAnimation = () => {
    setAnimation('spin')
    setTimeout(() => {
      setAnimation(null)
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
    const rand = Math.floor(Math.random() * checkedFruits.length)
    const nextState = checkedFruits[rand]
    setSelected(nextState)
    openModal()
  }

  /* istanbul ignore next */

  // Function ➞ unchecks all fruits
  const handleReset = () => {
    const nextState = data.map((fruit) => ({ ...fruit, checked: false }))
    setData(nextState)
    updateAnimation()
  }

  return (
    <div className="fullscreen">
      <Header />
      <Board
        data={data}
        handleCheck={handleCheck}
      />
      <Draw
        animation={animation}
        disabled={checkedFruits.length < 2}
        handleDraw={handleDraw}
        handleReset={handleReset}
      />
      <Modal
        isOpen={isOpen}
        onAfterClose={afterCloseModal}
        onRequestClose={closeModal}
        selectedFruit={selected}
      />
    </div>
  )
}

export default App
