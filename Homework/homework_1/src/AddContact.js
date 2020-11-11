import React, { Component } from 'react'
import * as db from './data'
import PropTypes from 'prop-types'

class AddContact extends Component {
  state = {
    id: Date.now(),
    name: '',
    phone: '',
    email: '',
  }

  hanldeChange = (event) => {
    const { name, value } = event.target
    this.setState(
      {
        [name]: value
      },
    )
  }

  save = () => {
    db.addContact(this.state)
    this.props.handleAddContact(this.state)
    this.props.close()
  }

  render() {
    return (
      <div className='container filter-form'>
        <h4>Insert a new hit</h4>
        <hr />
        <br />
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>name</label>
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
            <label for='exampleInputPassword1'>phone</label>
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
            <label for='exampleInputPassword1'>email</label>
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
            className='btn btn-success mr-1'
            onClick={this.save}
          >
            Insert
          </button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => this.props.close()}
          >
            close
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
