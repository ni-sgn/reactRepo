import React, { Component } from 'react'
import ContactListItem from '../contact-list-item/ContactListItem'
import './ContactList.css'
import toggleOpen from '../../decorators/toggleOpen'
import { connect } from 'react-redux'
import { loadContacts } from '../../actions'

class ContactList extends Component {
  componentDidMount() {
    this.props.loadContacts()
  }

  getContacts = (contacts) => (
    <>
      {contacts &&
        contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            removeContact={this.props.handleRemoveContact}
            editContact={this.props.handleEditContact}
          />
        ))}
    </>
  )

  render() {
    const { filteredContacts, isOpen, toggle } = this.props
    return (
      <div className='container'>
        <button className='btn btn-primary btn-xs' onClick={toggle}>
          show/hide
        </button>
        {isOpen ? this.getContacts(filteredContacts) : null}
      </div>
    )
  }
}

function mapStateToProps({ contactObject }) {
  const { contacts, search } = contactObject
  return {
    filteredContacts:
      contacts && contacts.filter((contact) => contact.name.includes(search)),
  }
}

export default connect(mapStateToProps, { loadContacts })(
  toggleOpen(ContactList)
)
