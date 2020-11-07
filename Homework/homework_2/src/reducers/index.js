//returns one combined reducer???
import {combineReducers} from 'redux'
import counterReducer from './counterReducer'

//oh... this combines reducers
//therefore this insdex.js is main reducer file that
//combines every little reducers 
export default combineReducers({
    counter: counterReducer
})


