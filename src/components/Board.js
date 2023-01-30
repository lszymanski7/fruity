import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'

const Widget = ({ data, handleCheck }) => {
    return (
        <div className="board">
            {data.map((fruit) => {
                const key = fruit.name.toLowerCase().replace(' ', '-')

                return (
                    <Element
                        key={key}
                        checked={fruit.checked}
                        handleCheck={handleCheck}
                        id={fruit.id}
                        img={fruit.img}
                        name={fruit.name}
                    />
                )
            })}
        </div>
    )
}

Widget.propTypes = {
    data: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired
}

export { Widget as default }
