import React, { Component, PropTypes } from 'react'
import './card.scss'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { onClick, src, title, url, nodeTitle, nodeURL, username, replies, lastTouched } = this.props
    return (
      <div className='V2EX-Card'
          onClick={onClick}>
        <div className='img'>
          <img src={src} />
        </div>
        <div className='info'>
          <a href={url} className='title' title={title}>{title}</a>
          <div className='sub-info'>
            <a href={nodeURL} className='node'>{nodeTitle}</a>
            -
            <a href={'https://www.v2ex.com/member/' + username} className='username'>{username}</a>
            -
            <span className='last-touched'>{new Date(new Date() - lastTouched).toLocaleTimeString()}</span>
          </div>
        </div>
        <div className='replies'>
          <span>{replies}</span>
        </div>
      </div>
    )
  }
}
