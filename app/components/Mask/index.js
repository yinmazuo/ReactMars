import React, { Component, PropTypes } from 'react'
import './mask.scss'

export default class Mask extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let style = {display: this.props.show ? 'block' : 'none'}
    return (
      <div ref={(ref) => this.mask = ref} style={style} className='Mars-Modal-Mask' onClick={this.props.onClick}></div>
    )
  }
}

Mask.PropTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
}

Mask.defaultProps = {
  show: false
}
