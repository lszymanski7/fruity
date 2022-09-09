import React from 'react'
import PropTypes from 'prop-types'

const Draw = ({ disabled, onClick }) => {
    return (
        <button className="big-button" disabled={disabled} onClick={onClick} type="button">
            {disabled ? 'Select more fruits!' : 'Draw a fruit!'}
        </button>
    )
}

Draw.propTypes = {
	disabled: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export { Draw as default }
