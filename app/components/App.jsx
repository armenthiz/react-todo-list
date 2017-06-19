import React from 'react'
import { Provider } from 'react-redux'
// UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// Redux
import { addTodo } from '../actions/Action.jsx'
import Store from '../store/Store.jsx'
import Todos from '../containers/Todo/Todos.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addTodo() {
    Store.dispatch(addTodo(Math.random(1)))
  }

  render() {
    return (
      <MuiThemeProvider>
        <Provider store={ Store }>
          <div>
            <RaisedButton label='Add Todo' onClick={ this.addTodo } />
            <Todos todos={ Store.getState().todos } />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
