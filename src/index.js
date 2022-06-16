import React from 'react'
import ReactDOM from 'react-dom/client'
import FruityApp from './components/FruityApp'
import 'normalize.css/normalize.css'
import '../src/assets/styles/styles.scss'
import '../src/assets/icons/index'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <FruityApp />
)