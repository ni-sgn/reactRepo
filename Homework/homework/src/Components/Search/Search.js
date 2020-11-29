import React from 'react'
import PropTypes from 'prop-types'

function Search(props) {

    return (
      <form className='filter-form container' style={{ marginTop: '70px' }}>
        <div className='input-group input-group'>
          <div className='input-group-prepend'>
            <button
              className='btn btn-outline-secondary btn-primary font-weight-bold text-warning'
              type='button'
              id='add-button'
              onClick={props.showAddForm}
            >
              Insert
            </button>
          </div>
          <input
            placeholder='Look-UP'
            type='text'
            className='form-control'
            id='search'
            value={props.searchValue}
            onChange={props.handleSearch}
          />
        </div>
      </form>
    )
}

export default Search

Search.propTypes =
{
    searchValue: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
}