import React from 'react'
import {Link} from 'react-router-dom'
import {SignOut} from '../../context'

export default  function Header (props){
   return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={SignOut} style={{cursor:"pointer"}}>SignOut</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            </div>
        </div>
        </nav>
   )
}



