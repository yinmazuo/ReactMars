import React, { Component, PropTypes } from 'react'
import Icon from '../Icon'
import './watingIcon.scss'

export default class WaitingIcon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='WatingIcon'>
        <Icon {...this.props} other={['spinner', 'pulse']}/>
      </div>
    )
  }
}

WaitingIcon.PropTypes = {
  other: PropTypes.array
}
