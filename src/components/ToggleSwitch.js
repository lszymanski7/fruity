import React from 'react'
import PropTypes from 'prop-types'

const ToggleSwitch = ({ colors, handleOnChange, icons, id, isChecked }) => {
    return (
        <div className="toggle-switch">
            <input
                checked={isChecked}
                className="toggle-switch__input"
                id={id}
                onChange={handleOnChange}
                type="checkbox"
            />
            <label
                className={
                    'toggle-switch__label' +
                    (colors ? (isChecked ? ' ' + colors[0] : ' ' + colors[1]) : '')
                }
                htmlFor={id}
            >
                {icons && (
                    <>
                        <span className={'toggle-switch__icon ' + icons[0]} />
                        <span className={'toggle-switch__icon ' + icons[1]} />
                    </>
                )}
                <span className="toggle-switch__slider" />
            </label>
        </div>
    )
}

ToggleSwitch.propTypes = {
    colors: PropTypes.array,
    handleOnChange: PropTypes.func.isRequired,
    icons: PropTypes.array,
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
}

export { ToggleSwitch as default }
