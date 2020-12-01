import React, {Component} from 'react'
import ListItem from './ListItem.js'
import { connect } from 'react-redux'
import { removeContact_action } from '../../redux/actions'


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
                    <ListItem contact = { contact } toggleEditForm = {this.props.toggleEditForm}/> )
                }
            </div>
        </div>
   }

}

//what's this syntax, selectors???
const mapStateToProps = state => ( {contacts: state.contacts} )
export default connect(mapStateToProps, undefined)(List)