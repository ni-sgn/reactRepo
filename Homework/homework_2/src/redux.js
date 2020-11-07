//this isn't react this is pure javascript
//node.js way
//npm install redux react-reduxnp
const redux = require('redux')


//state
const initialState = {
    counter:0
}

//reducer (basically reduces things to defined actions)
//write only side-effectless function
//works with the store
const reducer = (state=initialState,action) =>
{
    //type is a must, payload isn't
    //this is a custom action?
    //destruqturizacia???
    const {type,payload}  = action
    
switch(type)
{
    case 'INCREMENT':
        return {
            counter: state.counter + 1
        }
    case 'DECREMENT':
        return {
            counter: state.counter - 1
        }
    //we are basically defining and mapping action/types with
    //their actual functionality reducing types to their implementation
    case 'ADD_NUMBER':
        return {
            counter: state.counter + payload
        }
        
    default:
        break
}
}

//action
//here happens all the side-effects
// No, this is a definition of a custom action...
const increment = () =>
{
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}


//using payload
//it's need side effect(taking number from somewhere, api or 
//server or something...)
const addNumber = (number) =>
{
    return {
        type: 'ADD_NUMBER',
        payload: number
    }
}

//store
//basocally store contains everything 
//and it's like a control center
//we manipulate throught store

const store = reduct.createStore(reducer)


//sends changed state to subscribed components
store.subscribe(()=>console.log('state', store.getState()))

//call the action...
store.dispatch(increment())

//action->reducer->store