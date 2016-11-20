import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='Mars-Modal-Footer'>{this.props.children}</div>
    )
  }
}

Footer.PropTypes = {
  children: PropTypes.any
}
