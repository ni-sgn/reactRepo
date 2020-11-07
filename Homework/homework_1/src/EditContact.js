import React, { Component } from 'react'
import * as db from './data'
import PropTypes from 'prop-types'

class AddContact extends Component {
  state = {
    id: null,
    name: '',
    phone: '',
    email: '',
  }
  componentDidMount()
  {
    const data = db.getContacts()
    const currentContact = data.filter((x) => x.id === this.props.currentId)
    this.setState(
        {
            id: this.props.currentId,
            name: currentContact[0].name,
            phone: currentContact[0].phone,
            email: currentContact[0].email,
        }
    )
  }
 
  hanldeChange = (event) => {

    //weird syntax ...
    const { name, value } = event.target
    this.setState(
      {
        [name]: value
      }
    )
  }

  //we need a new functionality in db
  edit = () => {
    db.editContact(this.state)
    this.props.updateState(this.state)
    this.props.close()
  }

  render() {
    return (
      <div className='container filter-form'>
        <h4>კონტაქტის მოდიფიცირება</h4>
        <hr />
        <br />
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>დასახელება</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              value={this.state.name}
              name='name'
              onChange={this.hanldeChange}
            />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>ტელეფონი</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.phone}
              name='phone'
              onChange={this.hanldeChange}
            />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>ელ.ფოსტა</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.email}
              name='email'
              onChange={this.hanldeChange}
            />
          </div>
          <button
            type='button'
            className='btn btn-primary mr-1'
            onClick={this.edit}
          >
            მოდიფიცირება
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => this.props.close()}
          >
            დახურვა
          </button>
        </form>
      </div>
    )
  }
}

export default AddContact

AddContact.propTypes = 
{
  close: PropTypes.func.isRequired,
  handleAddContact: PropTypes.func.isRequired
}