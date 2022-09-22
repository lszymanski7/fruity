import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ disabled, handleDraw }) => {
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

Button.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleDraw: PropTypes.func.isRequired
}

export { Button as default }
