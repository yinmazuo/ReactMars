import React, { Component, PropTypes } from 'react'
import './button.scss'

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: this.props.disabled || false
    }

    this.handler = () => {
      if (this.props.onClick) {
        this.props.onClick()
      }
      if (this.props.one) {
        this.setState({
          disabled: true
        })
      }
    }
  }

  render() {
    let classNames = '',
        prefix = 'Mars-Btn-',
        { size, styleType } = this.props

    !size ? size = 'sm' : void 0
    !styleType ? styleType = 'default' : void 0
    classNames += (prefix + size) + ' ' + (prefix + styleType)
    return (
      <button
        ref={(ref) => this.button = ref}
        type={this.props.roleType || 'button'}
        style={this.props.style || {}}
        disabled={this.state.disabled}
        className = {classNames}
        onClick={this.handler}>
        {this.props.children}
      </button>
    )
  }
}
Button.PropTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  styleType: PropTypes.string,
  roleType: PropTypes.string,
  disabled: PropTypes.bool,
  one: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}
