import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ disabled, onClick }) => {
    return (
        <button className="big-button" disabled={disabled} onClick={onClick} type="button">
            {disabled ? 'Select more fruits!' : 'Draw a fruit!'}
        </button>
    )
}

Button.propTypes = {
	disabled: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export { Button as default }
