import React from 'react'
import { connect } from 'react-redux'
import './ContactListItem.css'
import { removeContact } from '../../actions'

function ContactListItem({
  contact: { id, name, phone, email },
  removeContact,
  editContact,
}) {
  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>phone: {phone}</p>
        <span>email: {email}</span>
        <span className='float-right'>
          <button
            className='btn btn-warning mr-2'
            onClick={() => editContact(id)}
          >
            კორექტირება
          </button>
          <button className='btn btn-danger' onClick={() => removeContact(id)}>
            წაშლა
          </button>
        </span>
      </div>
    </div>
  )
}

export default connect(null, { removeContact })(ContactListItem)
