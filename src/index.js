import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css';

import { reducers } from './reducers/reducers'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
)
render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker();
