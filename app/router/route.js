import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Test from '../containers/test';

export default class Root extends Component {
  render() {
    return (
	  <div>
  	  <Router history={browserHistory}>
  	    <Route path="/" component={Test} />
  	  </Router>
	  </div>
    );
  }
}
