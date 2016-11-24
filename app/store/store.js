import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { persistState } from 'redux-devtools';
import DevTools from '../DevTools';

const enhancer = compose(
  applyMiddleware({
    thunkMiddleware,
    promiseMiddleware()
  }),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);


let store = (initialState) => {
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
};

export default store;
