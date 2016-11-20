import React, { Component, PropTypes } from 'react'

import Mask from '../Mask'
import './modal.scss'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.enterAnimation = this.props.enterAnimation || 'zoomIn'
    this.leaveAnimation = this.props.leaveAnimation || 'zoomOut'
    //methods
    this.toggle = (bool) => {
      let wrap = this.wrap,
          modal = this.modal,
          newState = false;
      if (bool) {
        newState = true
        modal.classList.remove(this.leaveAnimation)
        modal.classList.add(this.enterAnimation)
      } else {
        modal.classList.remove(this.enterAnimation)
        modal.classList.add(this.leaveAnimation)
      }
      this.setState({
        show: newState
      })
    }
    this.open = () => {
      this.toggle(true)
      this.wrap.classList.add('Mars-Modal-Wrap-On')
    }
    this.close = () => {
      this.toggle(false)
      setTimeout(() => {
        this.wrap.classList.remove('Mars-Modal-Wrap-On')
      }, 300)
    }
    this.cancel = () => {
      if (this.props.onCancel) {
        this.props.onCancel()
      }
      this.close()
    }
    this.confirm = () => {
      if (this.props.onConfirm) {
        this.props.onConfirm()
      }
      this.close()
    }
  }

  componentDidMount(){
    let wrap = this.wrap,
        modal = this.modal,
        { role, size, type, top, left, width } = this.props;

    modal.classList.add('animated')
    if (role) {
      switch(role) {
        case 'alert': modal.classList.add('Mars-Modal-Alert')
      }
    }
    if (size) {
			modal.classList.add('Mars-Modal-' + size)
		}
    if (type) {
      modal.classList.add('Mars-Modal-' + type)
    }
    if (top) {
      modal.style.top = typeof top === 'number' ? top + 'px' : top
    } else {
      wrap.classList.add('Mars-Modal-Vertical')
    }
    if (left) {
      modal.style.left = typeof left === 'number' ? left + 'px' : left
    } else {
      wrap.classList.add('Mars-Modal-Horizontal')
    }
    if (width) {
      modal.style.width = typeof width === 'number' ? width + 'px' : width
    }
  }

  render() {
    return (
      <div ref={(ref) => this.wrap = ref } className="Mars-Modal-Wrap">
				{!this.props.hasMask || <Mask show={this.state.show} onClick={this.cancel} />}
          <div ref={(ref) => this.modal = ref } className="Mars-Modal" style={this.props.style}>
  				  <span className="Mars-Modal-Close" onClick={this.cancel}>×</span>
  					{this.props.children}
  				</div>
			</div>
    )
  }
}

Modal.PropTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  hasMask: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  top: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
  role: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
}
