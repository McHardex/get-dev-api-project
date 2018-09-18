import { combineReducers } from 'redux'
import { myApp } from './appReducers'

const reducers = combineReducers({myApp})

export { reducers }