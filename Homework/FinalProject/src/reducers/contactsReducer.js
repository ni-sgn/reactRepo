import {
  LOAD_CONTACTS,
  REMOVE_CONTACT,
  ADD_CONTACT,
  SEARCH_CONTACT,
} from '../actions/actionTypes'
const initialState = {
  contacts: [],
  search: '',
}

const contactsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: payload,
      }
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: payload,
      }
    case ADD_CONTACT:
      const contacts = [...state.contacts, payload]
      return { ...state, contacts }

    case SEARCH_CONTACT:
      return { ...state, search: payload }

    default:
      return state
  }
}

export default contactsReducer
