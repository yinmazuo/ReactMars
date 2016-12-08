import React, { Component, PropTypes } from 'react'
import Card from './Card'
import WatingIcon from '../WaitingIcon'

export default class ZhihuNews extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let { fetchLatestNews, fetchBeforeNews } = this.props.actions
    fetchLatestNews()
  }
  render() {
    let { data, isDone } = this.props.store

    return (
      <div>
        {isDone ? data.stories.map((item, index) => (
          <Card key={index} src={item.images[0]} title={item.title} id={item.id} />
        )) : <WatingIcon size={3}/>}
      </div>
    )
  }
}
