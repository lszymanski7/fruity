import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'

const Widget = ({ data, handleCheck, handleReset }) => {
    const title = 'Fruits to select:'

    return (
        <div className="widget">
            <div className="widget-header">
                <h2>{title}</h2>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="widget-container">
                {data.map((fruit) => {
                    const key = fruit.name.toLowerCase().replace(' ', '-')

                    return (
                        <Element
                            key={key}
                            checked={fruit.checked}
                            id={fruit.id}
                            img={fruit.img}
                            name={fruit.name}
                            handleCheck={handleCheck}
                        />
                    )
                })}
            </div>
        </div>
    )
}

Widget.propTypes = {
    data: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
}

export { Widget as default }
