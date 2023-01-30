import React from 'react'
import PropTypes from 'prop-types'

const Element = ({ checked, handleCheck, id, img, name }) => {
    return (
        <div className="element">
            <label className="element__label">
                <input
                    checked={checked}
                    className="element__checkbox"
                    onChange={() => handleCheck(id)}
                    type="checkbox"
                />
                <img
                    alt={name}
                    className="element__image"
                    src={img}
                />
                <span className="element__caption">{name.toUpperCase()}</span>
            </label>
        </div>
    )
}

Element.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleCheck: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export { Element as default }
