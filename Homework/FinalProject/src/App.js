import React from 'react'
import Header from './components/header/Header'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Contacts from './pages/Contacts'
import Posts from './pages/Posts'
import AddContact from './pages/AddContact'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Sidebar />
        <Header />
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Contacts} />
            <Route path='/addContact' component={AddContact} />
            <Route path='/posts' component={Posts} />
          </Switch>
        </div>
      </>
    )
  }
}

export default App
