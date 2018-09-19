import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import './index.css';

import { reducers } from './reducers/reducers'
import Posts from './components/Posts';
import Albums from './components/Albums';
import Users from './components/Users';
import { Router, Route, hashHistory } from 'react-router';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
)

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path='/' component={Posts} />
        <Route path="albums" component={Albums} />
        <Route path="users" component={Users} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
