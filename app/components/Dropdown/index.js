import React, { Component, PropTypes } from 'react'

import './Dropdown.scss'
import Button from '../Button'
import Icon from '../Icon'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
      value: this.props.items[0] || 'Dropdown'
    }
    this.toggleMenu = () => {
      if (this.state.display) {
        this.setState({display: false})
      } else {
        this.setState({display: true})
      }
    }
    this.changeValue = (v, i) => {    
      return () => {
        this.toggleMenu()
        if (v === this.state.value) {
          return false
        } else {
          this.setState({value: v})
          this.props.changeHandle(i)
        }
      }
    }
  }

  render() {
    return (
      <div className='Dropdown'
        ref={(ref) => this.dropdown = ref}>
        <Button ref={(ref) => this.button = ref}
              onClick={this.toggleMenu}
              {...this.props}>
              {this.state.value}
              <Icon ref={(ref) => this.icon = ref}
                    style={{marginLeft: '12px', marginRight: '6px', color: '#999'}}
                    name={'caret-' + (this.state.display ? 'up' : 'down')} />
        </Button>
        <div className='Dropdown-Menu'
            ref={(ref) => this.menu = ref}
            style={{display: this.state.display ? 'block' : 'none'}}>
          {this.props.items.map((itemContent, index) => (
            <div className='Dropdown-Item'
                 key={index}
                 onClick={this.changeValue(itemContent, index)}>
              {itemContent}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Dropdown.PropTypes = {
  children: PropTypes.any
}
