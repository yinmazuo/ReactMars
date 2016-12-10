import React, { Component, PropTypes } from 'react'
import './headerBar.scss'
import Dropdown from '../../Dropdown'

export default class HeaderBar extends Component {
  constructor(props) {
    super(props)
    this.handle = (i) => {
      this.props.handle[i]()
    }
  }
  render() {
    return (
      <div className='HeaderBar'>
        <h3>{this.props.title}</h3>
        <Dropdown items={['Latest', 'Hot']} changeHandle={this.handle}/>
      </div>
    )
  }
}
