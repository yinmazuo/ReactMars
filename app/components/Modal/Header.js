import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='Mars-Modal-Header'>{this.props.children}</div>
    )
  }
}

Header.PropTypes = {
  children: PropTypes.any
}
