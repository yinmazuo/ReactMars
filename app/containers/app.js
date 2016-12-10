import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../style/index.scss'
import './app.scss'

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Sidebar items={[
                            {location: 'V2EX', text: 'V2EX'},
                            {location: 'ZhihuNews', text: '知乎日报'},                        
                            {location: 'Juejin', text: '掘金'},
                            {location: 'Github', text: 'Github'},
                            {location: 'CSDN', text: 'CSDN'},
                            {location: 'ITHome', text: 'IT之家'},
                          ]}/>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
