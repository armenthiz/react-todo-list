import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Todos from '../../components/Todo/Todos.jsx'

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

function MapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  }
}

export default connect(MapStateToProps)(Todos)