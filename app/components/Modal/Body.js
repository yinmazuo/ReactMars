import React, { Component, PropTypes } from 'react'

export default class Body extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='Mars-Modal-Body'>{this.props.children}</div>
    )
  }
}

Body.PropTypes = {
  children: PropTypes.any
}
