import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'

const Widget = ({ data, handleCheck }) => {
    return (
        <div className="board">
            <div className="board__elements-container">
                {data.map((fruit) => {
                    const key = fruit.name.toLowerCase().replace(' ', '-')

                    return (
                        <Element
                            checked={fruit.checked}
                            handleCheck={handleCheck}
                            id={fruit.id}
                            img={fruit.img}
                            key={key}
                            name={fruit.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

Widget.propTypes = {
    data: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired
}

export { Widget as default }
