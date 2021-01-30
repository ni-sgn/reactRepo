import React, { Component } from 'react'
import { addContact } from '../actions'
import { connect } from 'react-redux'

class AddContact extends Component {
  state = {
    id: Date.now(),
    name: '',
    phone: '',
    email: '',
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.contact && props.contact.id !== state.id) {
  //     return props.contact
  //   }
  // }

  hanldeChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  save = () => {
    this.props.addContact(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='container filter-form'>
        <h4>კონტაქტის დამატება</h4>
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
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>ტელეფონი</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              value={this.state.phone}
              name='phone'
              onChange={this.hanldeChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>ელ.ფოსტა</label>
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
            onClick={this.save}
          >
            დამატება
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => this.props.history.push('/')}
          >
            დახურვა
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addContact })(AddContact)
