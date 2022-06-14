import React from 'react'
import Draw from './Draw'
import FruitsList from './FruitsList'
import Header from './Header'

const FruityApp = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <FruitsList />
                <Draw />
            </div>
        </div>
    ) 
}

export { FruityApp as default }