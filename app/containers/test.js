import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Mask from '../components/Mask'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.showMask = this.showMask.bind(this)
    this.state = {
      show: false
    }
  }
  showMask() {
    this.setState({
      show: true
    })
  }

  render() {
    let style = {
      position: 'fixed',
      height: '100%',
      left: '0',
      top: '0',
    	width: '100%'
    }
    return (
      <div style={style}>
        <button onClick={this.showMask}>button</button>
        <Mask show={this.state.show} />
      </div>
    )
  }
}
