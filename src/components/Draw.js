import React from 'react'
import PropTypes from 'prop-types'

const Draw = ({ animation, disabled, handleDraw, handleReset }) => {
    return (
        <div className="flexbox-row draw">
            <button
                className="draw__button-draw"
                disabled={disabled}
                onClick={handleDraw}
                type="button"
            >
                {disabled ? 'SELECT MORE FRUITS' : 'DRAW A FRUIT'}
            </button>
            <button
                className={'draw__button-reset' + ' ' + animation}
                disabled={disabled}
                onClick={handleReset}
                type="button"
            />
        </div>
    )
}

Draw.propTypes = {
    animation: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleDraw: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
}

export { Draw as default }
