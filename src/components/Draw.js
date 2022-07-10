import PropTypes from 'prop-types'
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

Draw.propTypes = {
	filteredFruits: PropTypes.array.isRequired,
	handleDraw: PropTypes.func.isRequired
}

export { Draw as default }
