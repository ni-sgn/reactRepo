import {combineReducers} from 'redux'
import reducerA from './reducerA'

export default combineReducers(
    {
        init: reducerA,
    }
)