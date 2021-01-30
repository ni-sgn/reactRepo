import React from 'react'
import './App.css'
import UserProvider, { UserContext } from "./providers/UserProvider"
import Home from './components/home/Home'


class App extends React.Component {


  render() { 
    return (
      <UserProvider>
        <Home/>
      </UserProvider>
    )
  }
}

export default App
