import React from 'react'

const Draw = (props) => {
	const { filteredFruits, handleDraw } = props
	
    return (
        <div>
		    <button className="big-button" disabled={filteredFruits.length < 2} onClick={handleDraw} >
			    Draw a fruit!
		    </button>
	    </div>
    )
}

export { Draw as default }