import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Widget = ({ fruits, setFilter, setFruits }) => {
    const title = 'Fruits to select:'

    return (
        <div className="widget">
            <div className="widget-header">
                <h2>{title}</h2>
            </div>
            <div className="widget-container">
                {
					fruits.map((fruit) => {
						const key = fruit.name.toLowerCase().replace(' ', '-')

						return (
							<Item
								key={key}
								checked={fruit.checked}
								fruits={fruits}
								id={fruit.id}
								img={fruit.img}
								name={fruit.name}
								setFilter={setFilter}
								setFruits={setFruits}
							/>
						)
                	})
				}
            </div>
        </div>
    )
}

Widget.propTypes = {
    fruits: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired,
    setFruits: PropTypes.func.isRequired
}

export { Widget as default }
