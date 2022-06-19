import React from 'react'

const Draw = (props) => {
	const { handleDraw } = props
	
    return (
        <div>
		    <button className="big-button" onClick={handleDraw}>
			    Draw a fruit!
		    </button>
	    </div>
    )
}

export { Draw as default }