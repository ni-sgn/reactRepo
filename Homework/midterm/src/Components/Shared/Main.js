import React from 'react'
import PropTypes from 'prop-types'
import * as db from '../../Data/data.js'
import Search from '../Search/Search.js'
import AddContact from '../Moderator/AddContact.js'
import EditContact from '../Moderator/EditContact.js'
import List from '../ContactList/List.js'


class Main extends React.Component
{

    state = {
        contacts: null,
        isEnable: true,
        addForm: false,
        editForm: false,
        currentId: null,
        searchValue: '',
      }
    
      componentDidMount() {
        const data = db.getContacts()
        this.setState({ contacts: data })
      }
    
      componentDidUpdate(prevProps, prevState, snapshot)
      {
        if(prevState.searchValue !== this.state.searchValue)
        { 
          //loading the db like this has to be terrible ........
          const data = db.getContacts()
          const contacts_filtered = data.filter((x) => 
          x.name.toUpperCase().includes(this.state.searchValue.toUpperCase()))
          this.setState({
            contacts: contacts_filtered,
          })
        
        }
      }
    
    
       /* This does nothing I think*/
      handleClick = (id) => {
        const contactData = this.state.contacts.filter((x) => x.id !== id)
        this.setState({ contacts: contactData })
      }
      
      handleSearch = (event) => {
        this.setState({
          searchValue: event.target.value,
        })
      }

    
       /* Potential for redux */
      handleClose = () => {                                  
        this.setState({ addForm: false })
        this.setState({ editForm: false})
      }
    
      handleRemoveContact = (id) => {
        const contactData = this.state.contacts.filter((x) => x.id !== id)
        db.removeContact(contactData) //this function must be a boolean, 0 for error; 1 for success
        this.setState({contacts: contactData})
      }
     handleShowAddForm = () => {
        this.setState({ addForm: true })
      }
     
    
      toggleEditForm = (id) => 
      {
        this.setState({editForm: true, currentId: id })
    
      }
    
      handleAddContact = (contact)=>{
        this.setState({contacts: [...this.state.contacts, contact]})
      }
    
      handleEditContact = (contact) => {
        const updatedState = this.state.contacts.filter((x) => x.id !== contact.id)
        this.setState({contacts: [...updatedState, contact]})
      }

    
      render() {
          let element //what about this?? yeah... what about it.
        if(this.state.addForm)
        {
        element =( 
            <>
            {/*So that we don't have to repeat a code segment*/}
             <AddContact 
              close={this.handleClose} 
              handleAddContact = {this.handleAddContact}/>
            </>)

        }
       else if(this.state.editForm)
        {
          element = (
          <>
            <EditContact
             close={this.handleClose}
             currentId = {this.state.currentId}
             updateState={this.handleEditContact}/>
          </>)

        }else{
         element =( 
            <>
            {/*looks like anything that returns JSX(component) must start with a capital letter????*/}
            <Search searchValue={this.state.searchValue} handleSearch={this.handleSearch}  showAddForm={this.handleShowAddForm}/>
            <List
                contacts={this.state.contacts}
                handleRemoveContact={this.handleRemoveContact}
                toggleEditForm={this.toggleEditForm} />
            </>)
 
        }
        
        return ( element )
      }

}

export default Main