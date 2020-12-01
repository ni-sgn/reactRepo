import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { removeContact_action } from '../../redux/actions'

function ListItem(props){
        return <div key={props.contact.id} className='card mt-3'>
        <div className='card-body'>
          <p className='text-monospace'>Name: {props.contact.name} </p>
          <p className='text-monospace'>Phone: {props.contact.phone} </p>
          <p className='text-monospace'>Email: {props.contact.email} </p>
        
        <button className='btn btn-danger float-right' 
          onClick={() =>props.removeContact_action(props.contact.id)}
        >X</button> 
        <button className='btn btn-primary float-right mr-2'
         onClick={()=>props.toggleEditForm(props.contact.id)} // it needs () in the end here for some reason????????
          >Edit</button>
        </div>
    </div>
    
}


ListItem.propTypes = 
{
    toggleEditForm: PropTypes.func.isRequired,
    contact : PropTypes.object.isRequired,

}
export default connect(null, {removeContact_action})(ListItem)
