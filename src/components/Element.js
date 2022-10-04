import React from 'react'
import PropTypes from 'prop-types'

const Element = ({ checked, handleCheck, id, img, name }) => {
    return (
        <label
            className="flexbox-column element"
            htmlFor={id}
        >
            <input
                checked={checked}
                className="element__checkbox"
                id={id}
                onChange={() => handleCheck(id)}
                type="checkbox"
            />
            <img
                alt={name}
                className="element__image"
                src={img}
            />
            <span className="element__caption">{name}</span>
        </label>
    )
}

Element.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleCheck: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export { Element as default }
