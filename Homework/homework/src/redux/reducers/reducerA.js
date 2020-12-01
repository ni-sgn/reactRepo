import * as NAMES from '../actionConstants'

const initialState = 
{
    contacts: [{id: 0, name: "Fistbump"}],
}


const reducerA = (state = initialState, action) =>
{
    const {type, payload} = action
    switch(type)
    {
        case 'INITIALIZE':
            return {contacts: payload}
        case 'REMOVE_CONTACT':
            return {contacts: payload}
        case 'ADD_CONTACT':
            return {contacts: payload}
        case 'EDIT_CONTACT':
            return {contacts: payload}
        case 'SEARCH_EVENT':
            return {contacts: payload}
        default:
            return state
    }
}

export default reducerA