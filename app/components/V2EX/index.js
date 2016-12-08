import React, { Component, PropTypes } from 'react'
import Card from './Card'
import WatingIcon from '../WaitingIcon'

export default class V2EX extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { fetchLatestTopics } = this.props.actions
    fetchLatestTopics()
  }
  render() {
    let { data, isDone } = this.props.store

    return (
      <div>
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
    )
  }
}
