import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'

export default combineReducers({
  contactObject: contactsReducer,
})
