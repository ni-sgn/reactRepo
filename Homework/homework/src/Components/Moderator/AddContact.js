import React, { Component , useState} from 'react'
import * as db from '../../Data/data.js'
import PropTypes from 'prop-types'
import {useFormik} from 'formik'
import {connect} from 'react-redux'
import {addContact_action} from '../../redux/actions'




/* Trying out hooks*/

function AddContact(props) {

    /*trying out formik*/


    function validate(values)
    {
        const errors = {};
        if(!values.name)
        {
            errors.name = "Required";
        }
        if(!values.phone)
        {
            errors.phone = "Required";
        }
        if(!values.email){
            errors.email = "Required";
        }
        return errors ;
    }
    const {handleSubmit, handleChange, values, errors} = useFormik(
        {
            initialValues: {
                id: Date.now(),
                name: '',
                phone: '',
                email: '', 
            },
            validate, onSubmit(values)
            {
                const contact = values
                props.addContact_action(contact)
                props.close()
            }
        }
    )

          
      
    return (
      <div className='container filter-form'>
        <h4>Insert a new hit</h4>
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>name</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              value={values.name}
              name='name'
              onChange={handleChange}
            />
            <p className='alert-danger'>{errors.name ? errors.name : null}</p>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>phone</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={values.phone}
              name='phone'
              onChange={handleChange}
            />
            <p className='alert-danger'>{errors.phone ? errors.phone : null}</p>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>email</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={values.email}
              name='email'
              onChange={handleChange}
            />
            <p className='alert-danger'>{errors.email ? errors.email : null}</p>
          </div>
          <button
            type='submit'
            className='btn btn-success mr-1'
          >
            Insert
          </button>
          <button
            type='submit'
            className='btn btn-danger'
            onClick={props.close}
          >
            close
          </button>
        </form>
      </div>
    )
    
}


export default connect(null, {addContact_action})(AddContact)

AddContact.propTypes = 
{
  close: PropTypes.func.isRequired,
}




/********************************
 * JUNK CODE FOR FUTURE REFERENCE
 * HOOKEBI ROMLIS WASHLAC MOMIXDA
 * VALIDACIIS GAMO
 * 
 ********************************/

/*
    const [contact, setContact] = useState( {
      id: Date.now(),
      name:'',
      phone:'',
      email:'' } );
      */

      /*
    const [id, setId] = useState(Date.now());
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
        */
  
    /*
      function handleChange(event) {
        const { name, value } = event.target
        console.log([name])
        setContact( {[name]: value} )
      }
*/

/*
      function save() {
        const contact = {id,name,phone,email}
        console.log(contact);
        db.addContact(contact)
        props.handleAddContact(contact)
        props.close()
      }

      */