import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import { fetchIp } from './store/slices/ipSlice'
import { fetchQuote } from './store/slices/quoteSlice';

import './index.css'

store.dispatch(fetchIp())
store.dispatch(fetchQuote())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
