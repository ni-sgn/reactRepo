import React from 'react'
import Header from './Header'
import ContactList from './contact-list/ContactList'
import AddContact from './AddContact'
import EditContact from './EditContact'
import Search from './search/Search'
import * as db from './data'
import './App.css'

class App extends React.Component {

  state = {
    contacts: null,
    isEnable: true,
    searchValue: '',
    addForm: false,
    editForm: false,
    currentId: null,
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
      const contactsA = data.filter((x) =>
      x.name.toUpperCase().includes(this.state.searchValue.toUpperCase()))
      this.setState({
        contacts: contactsA,
      })
    
    }
  }


  handleClick = (id) => {
    const contactData = this.state.contacts.filter((x) => x.id !== id)
    this.setState({ contacts: contactData })
  }

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  handleClose = () => {                                  
    this.setState({ addForm: false })
    this.setState({ editForm: false})
  }

  handleRemoveContact = (id) => {
    const contactData = this.state.contacts.filter((x) => x.id !== id)
    db.removeContact(contactData)
    this.setState({contacts: contactData})
  }

  hendleShowAddForm = () => {
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
    if(this.state.addForm)
    {
      return (
        <>
        <Header />
        <Search
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          showAddForm={this.hendleShowAddForm}
        />
         <AddContact 
          close={this.handleClose} 
          handleAddContact = {this.handleAddContact}/>
        </>
      )
    }
   else if(this.state.editForm)
    {
      return(
      <>
      <Header />
        <Search
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          showAddForm={this.hendleShowAddForm}
        />
        <EditContact
         close={this.handleClose}
         currentId = {this.state.currentId}
         updateState={this.handleEditContact}/>
      </>
      )
    }else{
      return(
        <>
        <Header />
        <Search
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          showAddForm={this.hendleShowAddForm}
        />
        <ContactList
            contacts={this.state.contacts}
            handleRemoveContact={this.handleRemoveContact}
            toggleEditForm={this.toggleEditForm} />
        </>
      )
    }
  }
}
export default App
