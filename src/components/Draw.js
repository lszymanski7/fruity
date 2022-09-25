import React from 'react'
import PropTypes from 'prop-types'

const Draw = ({ disabled, handleDraw }) => {
    return (
        <button
            className="big-button"
            disabled={disabled}
            onClick={handleDraw}
            type="button"
        >
            {disabled ? 'Select more fruits!' : 'Draw a fruit!'}
        </button>
    )
}

Draw.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleDraw: PropTypes.func.isRequired
}

export { Draw as default }
