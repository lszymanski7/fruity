import React from 'react'

const Draw = (props) => {
	const { filteredFruits, handleDraw } = props
	
    return (
        <div>
		    <button className="big-button" disabled={filteredFruits.length < 2} onClick={handleDraw} >
				{filteredFruits.length < 2 ? 'Select more fruits!' : 'Draw a fruit!'}
		    </button>
	    </div>
    )
}

export { Draw as default }
