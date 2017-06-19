import { createStore } from 'redux'
import todoApp from '../reducers/Reducer.jsx'

let Store = createStore(todoApp)
export default Store