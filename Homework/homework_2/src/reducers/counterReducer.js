//every reducer needs its state set???
const initialState = {
    counter : 0
}

const counterReducer = (state=initialState,action) =>
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


export default counterReducer


