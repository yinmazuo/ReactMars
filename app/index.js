import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import Root from './router/route'

const store = configureStore()

const app = document.getElementById('app')

render(
  <Provider store={store}>
    <Root />
  </Provider>, app
);
