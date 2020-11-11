import React, {Component} from 'react'
import ContactListItem from './contact-list-item/ContactListItem'
import './ContactList.css'

class ContactList extends Component{

   render(){
    return <div className='container'>
        <h4>Hit List</h4>
        <hr />
        <br />
            <div>
                {
                   this.props.contacts && 
                   this.props.contacts.map(contact => 
                    <ContactListItem contact = { contact } removeContact = {this.props.handleRemoveContact} toggleEditForm = {this.props.toggleEditForm}/> )
                }
            </div>
        </div>
   }

}
export default ContactList