import {createStore} from 'redux'
import reducerA from '../reducers/reducerA'

const store = createStore(reducerA)
export default store