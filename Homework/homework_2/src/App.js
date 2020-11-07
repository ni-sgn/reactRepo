import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from './actions'

function App(props) {
  return (
    <div className="App">
      <h1>{props.counter}</h1>
        <button onClick={props.increment}>
          increment
        </button>
        <button onClick={props.decrement}>
          decrement
        </button>
    </div>
  );
}


//can use logic here.....
//like filters and stuff
//think about this...(selectors)
function mapStateToProps(state)
{
  console.log('state', state)
  return state.counter
}

//This is weird...
//connect sends data to app
//mapdispatchtoprops??? second parameter
//this subscribes app component to a thing ...
//connect uses shouldcomponendupdate
export default connect(mapStateToProps, {increment,decrement})(App);
