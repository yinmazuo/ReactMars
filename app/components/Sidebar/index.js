import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './sidebar.scss'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { items } = this.props

    return (
      <div className='Sidebar' style={{height: items.length * 40 + 'px'}}>
        {items.map((item, index) => (
          <Link to={item.location} key={index}
                className='link'
                activeClassName='link-active'>
                {item.icon ? <img src={item.icon} /> : void 0}
                <span>{item.text}</span>
          </Link>
        ))}
      </div>
    )
  }
}
