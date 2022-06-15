import React from 'react'

const Draw = (props) => {
    return (
        <div>
		    <button className="big-button" onClick={props.handleDraw}>
			    Draw a fruit!
		    </button>
	    </div>
    )
}

export { Draw as default }