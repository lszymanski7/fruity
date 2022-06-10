import React from 'react'
import Draw from './Draw'
import Header from './Header'

const FruityApp = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <Draw />
            </div>
        </div>
    ) 
}

export { FruityApp as default }