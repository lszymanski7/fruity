import React from 'react'
import PropTypes from 'prop-types'

const Element = ({ checked, handleCheck, id, img, name }) => {
    return (
        <div className="flexbox-column element">
            <input
                checked={checked}
                className="element__checkbox"
                id={id}
                onChange={() => handleCheck(id)}
                type="checkbox"
            />
            <label htmlFor={id}>
                <img
                    alt={name}
                    className="element__image"
                    src={img}
                />
            </label>
            <h3 className="element__title">{name}</h3>
        </div>
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
