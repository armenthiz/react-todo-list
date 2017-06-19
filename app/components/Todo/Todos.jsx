import React from 'react'
import Todo from './Todo.jsx'

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => 
          <Todo id={ index } value={ todo.text } key={ index } />
        )}
      </ul>
    )
  }
}
