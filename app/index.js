import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';

//import Root from './router/route';

//import configureStore from './store/configureStore';

//const store = configureStore();
import Root from './router/route'

var app = document.getElementById('app');

render(
  <Root />, app
);
