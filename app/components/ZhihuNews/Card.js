import React, { Component, PropTypes } from 'react'
import './card.scss'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <a href={'http://daily.zhihu.com/story/' + this.props.id}
          className='ZhihuNews-Card'>
        <div className='img'>
          <img src={this.props.src} />
        </div>
        <p>{this.props.title}</p>
      </a>
    )
  }
}
