import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//import DevTools from '../DevTools'
import App from '../containers/app'
import ZhihuNewsC from '../containers/ZhihuNewsC'
import V2EXC from '../containers/V2EXC'

export default class Root extends Component {
  render() {
    return (
	  <div>
  	  <Router history={browserHistory}>
  	    <Route path="/" component={App} >
          <IndexRoute component={V2EXC}/>
          <Route path="V2EX" component={V2EXC} />
          <Route path="ZhihuNews" component={ZhihuNewsC} />
        </Route>
  	  </Router>
      {/*<DevTools />*/}
	  </div>
    );
  }
}
