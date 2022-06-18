import React, { useState, useEffect } from 'react'
import Item from './Item'

import fruits from '../dictionary/fruits'

const Widget = () => {
    const title = 'Your fruits'

    return (
        <div className="container">
            <div>
			    <h3>{title}</h3>
            </div>
            { 
                fruits.map(
                    (fruit) => <Item key={fruit.id} id={fruit.id} img={fruit.img} name={fruit.name} checked={fruit.checked} />
                )
            }
		</div>
    )
}

export { Widget as default }