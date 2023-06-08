import React from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ handleOnChange, isChecked }) => {
  return (
    <div
      className="toggle-switch"
      data-testid="theme-switch"
    >
      <input
        checked={isChecked}
        className="toggle-switch__input"
        id="theme-switch"
        onChange={handleOnChange}
        type="checkbox"
      />
      <label
        className="toggle-switch__label"
        htmlFor="theme-switch"
      >
        <span
          className="toggle-switch__icon moon-icon"
          data-testid="moon"
        />
        <span
          className="toggle-switch__icon sun-icon"
          data-testid="sun"
        />
        <span className="toggle-switch__slider" />
      </label>
    </div>
  )
}

ToggleSwitch.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired
}

export default ToggleSwitch
