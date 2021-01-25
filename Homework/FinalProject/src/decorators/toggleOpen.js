import React, { Component } from 'react'

export default (OriginalComponent) =>
  class WrappedComponent extends Component {
    state = {
      isOpen: true,
    }

    toggleOpen = (ev) => {
      ev && ev.preventDefault && ev.preventDefault()
      this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggle={this.toggleOpen}
        />
      )
    }
  }
