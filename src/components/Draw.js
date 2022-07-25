import PropTypes from 'prop-types'
import React from 'react'

const Draw = (props) => {
	const { filteredFruits, handleDraw } = props
	const isDisabled = filteredFruits.length < 2

	return (
		<div>
			<button className="big-button" disabled={isDisabled} onClick={handleDraw}>
				{isDisabled ? 'Select more fruits!' : 'Draw a fruit!'}
			</button>
		</div>
	)
}

Draw.propTypes = {
	filteredFruits: PropTypes.array.isRequired,
	handleDraw: PropTypes.func.isRequired
}

export { Draw as default }
