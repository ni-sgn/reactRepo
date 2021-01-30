import React, { useContext } from 'react'
import SignIn from '../Authentication/SignIn'
import Header from '../header/Header'
import { Switch, Route } from 'react-router-dom'
import Sidebar from '../sidebar'
import Contacts from '../../pages/Contacts'
import Posts from '../../pages/Posts'
import AddContact from '../../pages/AddContact'
import {UserContext} from "../../providers/UserProvider"

function Home() {
  //const user = {user:"placeholder"}
  const user = useContext(UserContext)
    return (
        user ?
        <>
        <Header />
        <Sidebar />
        <div className="content">
        <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route path="/Posts" component={Posts}/>
            <Route path="/addContact" component={AddContact}/>
        </Switch>
        </div>
        </>
        :
        <SignIn/>
        
    )
  }

export default Home
