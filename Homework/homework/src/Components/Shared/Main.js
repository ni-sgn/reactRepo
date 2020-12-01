import React from 'react'
import PropTypes from 'prop-types'
import * as db from '../../Data/data.js'
import Search from '../Search/Search.js'
import List from '../ContactList/List.js'
import {initializeAction, searchbar_action} from '../../redux/actions'
import {connect} from 'react-redux'
import store from '../../redux/store'
import AddContact from '../Moderator/AddContact.js'
import EditContact from '../Moderator/EditContact.js'



//changing of state is probably detected
//by looking at the 'setState' calls.

class Main extends React.Component
{

    state = {
        //contacts: null,
        isEnable: true,
        addForm: false,
        editForm: false,
        currentId: null,
        searchValue: '',
      }
    
      componentDidMount() { 
        this.props.initializeAction()
      }
    
      componentDidUpdate(prevProps, prevState, snapshot)
      {
        if(prevState.searchValue !== this.state.searchValue)
        { 
          //loading the db like this has to be terrible ........
          //we have to make a backspace to cause an effect
          this.props.searchbar_action(this.state.searchValue)
        
        }
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
     
     handleShowAddForm = () => {
        this.setState({ addForm: true })
      }
     
    
      toggleEditForm = (id) => 
      {
        this.setState({editForm: true, currentId: id })
    
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
             currentId = {this.state.currentId}/>
          </>)

        }else{
         element =( 
            <>
            {/*looks like anything that returns JSX(component) must start with a capital letter????*/}
            <Search searchValue={this.state.searchValue} handleSearch={this.handleSearch}  showAddForm={this.handleShowAddForm}/>
            <List
                contacts={this.state.contacts}
                //handleRemoveContact={this.handleRemoveContact}
                toggleEditForm={this.toggleEditForm} />
            </>)
 
        }
        
        return ( element )
      }

}

//pirvel renderi componentDidMount()-amde xdeba,
//this.props.contacts[0].name manamde null an undefined-ia
//erti gadawyveta specialuri initialState-iqneba
//an iqneb erti damatebiti state romelic amas gaakontrolebs
const mapStateToProps = state => ({ contacts: state.contacts, guba: state.guba })

export default connect(mapStateToProps, {initializeAction, searchbar_action})(Main)