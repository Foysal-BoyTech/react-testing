import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import inputReducer from './inputReducer'

const reducers = combineReducers({
  counter: counterReducer,
  input: inputReducer,
})

export default reducers
