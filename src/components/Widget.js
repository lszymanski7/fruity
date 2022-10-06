import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'

const Widget = ({ data, handleCheck, handleReset }) => {
    return (
        <div className="flexbox-column">
            <div className="widget-header">
                <button 
                    className="widget-header__reset" 
                    onClick={handleReset}
                >
                    Reset All
                </button>
            </div>
            <div className="flexbox-row widget-content">
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
