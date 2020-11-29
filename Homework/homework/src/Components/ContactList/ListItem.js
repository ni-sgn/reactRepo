import React from 'react'
import PropTypes from 'prop-types'

function ListItem({contact, removeContact, toggleEditForm}){
        return <div key={contact.id} className='card mt-3'>
        <div className='card-body'>
          <p className='text-monospace'>Name: {contact.name} </p>
          <p className='text-monospace'>Phone: {contact.phone} </p>
          <p className='text-monospace'>Email: {contact.email} </p>
        
        <button className='btn btn-danger float-right' 
          onClick={()=>removeContact(contact.id)}
        >X</button> 
        <button className='btn btn-primary float-right mr-2'
         onClick={()=>toggleEditForm(contact.id)} // it needs () in the end here for some reason????????
          >Edit</button>
        </div>
    </div>
    
}

export default ListItem

ListItem.propTypes = 
{
    toggleEditForm: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
    contact : PropTypes.object.isRequired,

}

