import React from 'react'
import PropTypes from 'prop-types'

const Element = ({ checked, handleCheck, id, img, name }) => {
    return (
        <div className="item">
            <input
                checked={checked}
                id={id}
                onChange={() => handleCheck(id)}
                type="checkbox"
            />
            <label htmlFor={id}>
                <img
                    alt={name}
                    className="item__image"
                    src={img}
                />
            </label>
            <h3 className="item__title">{name}</h3>
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
