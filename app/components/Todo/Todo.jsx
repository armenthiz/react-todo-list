import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  alertClick(item, event) {
    console.log(this.props.id)
  }

  render() {
    let alertClick = this.alertClick.bind(this)

    return(
      <li>
        { this.props.value }&nbsp;
        <a href="#" onClick={ alertClick }>alertClick</a>
      </li>
    )
  }
}