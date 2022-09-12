import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Fruity from './components/Fruity'
import store from './store'
import '@csstools/normalize.css'
import './assets/sass/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <Fruity />
    </Provider>
)
