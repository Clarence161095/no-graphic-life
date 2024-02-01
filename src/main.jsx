import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Game from './Game.jsx'
import './index.scss'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
)
