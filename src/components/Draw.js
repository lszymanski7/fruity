import React, { useState } from 'react'
import fruits from '../dictionary/fruits'

const Draw = () => {
	const [fruit, setFruit] = useState()

    const handleDraw = () => {
		const rand = Math.floor(Math.random() * fruits.length)
		setFruit(fruits[rand])
	}
	
    return (
        <div>
		    <button className="big-button" onClick={handleDraw}>
			    Draw a fruit!
		    </button>
	    </div>
    )
}

export { Draw as default }