import React from 'react'
import Header from './Header'

const FruityApp = () => {
    const title = 'Fruity'
    const subtitle = `Are you a fruit lover? Have you ever been unable to decide what kind of fruit you would like to eat? You don't have to worry about it anymore!`

    return (
        <div>
            <Header title={title} subtitle={subtitle} />
        </div>
    ) 
}

export { FruityApp as default }