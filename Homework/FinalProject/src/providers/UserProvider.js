import React from "react"
import { auth } from "../context"
import { Component } from "react";

export const UserContext = React.createContext({user: null})

class UserProvider extends Component
{
  state = 
  {
    user: null
  }

  componentDidMount = async () => 
  {
      auth.onAuthStateChanged(async userAuth => {
      this.setState({user:userAuth})
    })
    //how do we await this?
    //oh it updates the state and then a component
    console.log(this.state.user+"Whatata")
  }

render()
{
  const {user} = this.state
  return (
    <UserContext.Provider value={user}>
      {this.props.children}
    </UserContext.Provider>
  )
}

}

export default UserProvider