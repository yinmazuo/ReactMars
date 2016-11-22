import React, { Component, PropTypes } from 'react'
import 'font-awesome/css/font-awesome'

export default class Icon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let prefix = 'fa-',
        classNames = 'fa ',
        classNamesArr = [],
        {name, size, rotate, flip, fw, other} = this.props

    if (name) {
      classNames += (prefix + name) + ' '
    }
    if (size) {
      typeof size === 'number' ? size += 'x' : void 0
      classNames += (prefix + size) + ' '
    }
    if (rotate) {
      classNames += (prefix + 'rotate-' + rotate) + ' '
    }
    if (flip) {
      classNames += (prefix + flip) + ' '
    }
    if (fw) {
      classNames += (prefix + 'fw') + ' '
    }
    if (other && other.length > 0) {
      for (let i = 0, l = other.length; i < l; i++) {
        classNames += (prefix + other[i]) + ' '
      }
    }

    return (
      <i ref={(ref) => this.icon = ref}
         className={classNames}
         style={this.props.style}
         onClick={this.props.onClick}>
      </i>
    )
  }
}

Icon.PropTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  rotate: PropTypes.number,
  filp: PropTypes.string,
  fw: PropTypes.bool,
  other: PropTypes.array,
  onClick: PropTypes.func
}
