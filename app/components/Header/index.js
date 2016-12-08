import React, { Component, PropTypes } from 'react'
import './Header.scss'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='Header'>
        <div className='wrpper'>
          <h2>Mars</h2>
          <span>One is All!</span>
        </div>
      </div>
    )
  }
}
