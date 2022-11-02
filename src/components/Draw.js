import React from 'react'
import PropTypes from 'prop-types'

const Draw = ({ disabled, handleDraw }) => {
    return (
        <div>
            <button
                className="draw-button"
                disabled={disabled}
                onClick={handleDraw}
                type="button"
            >
                {disabled ? 'Select more fruits!' : 'Draw a fruit!'}
            </button>
        </div>
    )
}

Draw.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleDraw: PropTypes.func.isRequired
}

export { Draw as default }
