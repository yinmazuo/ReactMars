import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Root from './router/route'

const store = store()

const app = document.getElementById('app')

render(
  <Provider store={store}>
    <Root />
  </Provider>, app
);
