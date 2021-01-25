import * as db from '../data'

import { LOAD_CONTACTS, REMOVE_CONTACT, ADD_CONTACT, SEARCH_CONTACT } from './actionTypes'

export const loadContacts = () => {
  const data = db.getContacts()
  return {
    type: LOAD_CONTACTS,
    payload: data,
  }
}

export const removeContact = (id) => {
  const data = db.removeContact(id)
  return {
    type: REMOVE_CONTACT,
    payload: data,
  }
}

export const addContact = (contact) => {
  db.addContact(contact)
  return {
    type: ADD_CONTACT,
    payload: contact,
  }
}

export const searchContact = (value) => {
  return {
    type: SEARCH_CONTACT,
    payload: value,
  }
}
