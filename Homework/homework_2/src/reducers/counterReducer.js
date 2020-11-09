//every reducer needs its state set???
const initialState = {
    counter : 1
}

const counterReducer = (state=initialState,action) =>
{
    //type is a must, payload isn't
    //this is a custom action?
    //destruqturizacia???
    const {type,payload}  = action //I get this syntax, althought it feels weird at first, assigning values to the certain members of a list which are taken from 'action' list....
    
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
            counter: state.counter + payload //what if the payload is used in another action too??
        }
        
    default:
        return state
}
}


export default counterReducer


