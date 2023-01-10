import React from 'react'
import PropTypes from 'prop-types'
import { SHAPES } from '../data/constants'

const Draw = ({ animation, disabled, handleDraw, handleReset }) => {
    return (
        <div className="flexbox-row draw">
            <button
                className="draw__start-button"
                disabled={disabled}
                onClick={handleDraw}
                type="button"
            >
                {disabled ? 'SELECT MORE FRUITS' : 'DRAW A FRUIT'}
            </button>
            <button
                aria-label="Reset"
                className={'draw__reset-button' + (animation ? ' ' + animation : '')}
                disabled={disabled}
                onClick={handleReset}
                type="button"
            >
                <img
                    alt="Reset Icon"
                    className="draw__reset-icon"
                    src={SHAPES.reset}
                />
            </button>
        </div>
    )
}

Draw.propTypes = {
    animation: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    handleDraw: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
}

export { Draw as default }
