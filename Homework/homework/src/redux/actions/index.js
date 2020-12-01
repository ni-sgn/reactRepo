import * as NAMES from '../actionConstants'
import * as db from '../../Data/data'
import store from '../store/index'


export const initializeAction = () =>
{
    const initialize_contacts = db.getContacts()
    return{
    type: 'INITIALIZE',
    payload: initialize_contacts
    }
}

export const removeContact_action = (id) =>
{
    const current_contacts     = db.getContacts()
    const new_contacts         = current_contacts.filter((x) => x.id !== id)
    db.removeContact(new_contacts)

    return    {
        type:       'REMOVE_CONTACT',
        payload:    new_contacts,    
    }
}

export const addContact_action = (contact) =>
{
    const current_contacts = db.getContacts()
    const new_contacts     = [...current_contacts, contact]
    db.addContact(contact)
    return {
        type:   'ADD_CONTACT',
        payload: new_contacts
    }
}

export const editContact_action = (contact) =>
{
    db.editContact(contact)
    const new_contacts  = db.getContacts()
    return {
        type: 'EDIT_CONTACT',
        payload: new_contacts
    }

}

export const searchbar_action = (searchValue) =>
{
    /*This doesn't work because
      when you hit backspace the state is lacking
      the old contacts that got filtered, therefore
      there's no going back
      so I have to look up in the database again...
      */
    //const searching_for = store.getState().contacts
    const searching_for = db.getContacts()
    const filtered_contacts = searching_for.filter((x) => x.name.toUpperCase().includes(searchValue.toUpperCase()))
    return {
        type: 'SEARCH_EVENT',
        payload: filtered_contacts
    }
}
