import React from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ handleOnChange, isChecked }) => {
    return (
        <div className="toggle-switch">
            <input
                checked={isChecked}
                className="toggle-switch__input"
                id="theme-switcher"
                onChange={handleOnChange}
                type="checkbox"
            />
            <label
                className="toggle-switch__label"
                htmlFor="theme-switcher"
            >
                <span className="toggle-switch__icon moon-icon" />
                <span className="toggle-switch__icon sun-icon" />
                <span className="toggle-switch__slider" />
            </label>
        </div>
    )
}

ToggleSwitch.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired
}

export { ToggleSwitch as default }
