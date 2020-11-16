import React, {Component} from 'react'
import ListItem from './ListItem.js'

class List extends Component{

   render(){
    return <div className='container mt-4'>
        <h4>Hit List</h4>
        <hr />
        <br />
            <div>
                {
                   this.props.contacts && 
                   this.props.contacts.map(contact => 
                    <ListItem contact = { contact } removeContact = {this.props.handleRemoveContact} toggleEditForm = {this.props.toggleEditForm}/> )
                }
            </div>
        </div>
   }

}
export default List