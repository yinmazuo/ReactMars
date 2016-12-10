import React, { Component, PropTypes } from 'react'
import Card from './Card/index'
import HeaderBar from './HeaderBar/index'
import WatingIcon from '../WaitingIcon'
import './v2ex.scss'

export default class V2EX extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { fetchLatestTopics, fetchHotTopics } = this.props.actions
    fetchLatestTopics()
  }
  render() {
    let { data, isDone } = this.props.store
    let { fetchLatestTopics, fetchHotTopics } = this.props.actions

    return (
      <div className='V2EX'>
        <HeaderBar title='V2EX' handle={[fetchLatestTopics, fetchHotTopics]} />
        <div className='inner'>
          {isDone ? data.map((item, index) => (
            <Card key={index} src={item.member.avatar_normal}
                  title={item.title}
                  url={item.url}
                  nodeTitle={item.node.title}
                  nodeURL={item.node.url}
                  username={item.member.username}
                  replies={item.replies}
                  lastTouched={item.last_touched}
                  />
          )) : <WatingIcon size={3}/>}
        </div>
      </div>
    )
  }
}
