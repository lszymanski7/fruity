import React from 'react'

const Draw = () => {
    const handleDraw = () => {
		alert('Draw a Fruit!')
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