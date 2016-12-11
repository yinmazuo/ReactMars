import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const enhancer = applyMiddleware(thunkMiddleware, promiseMiddleware());

let store = (initialState) => {
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
};

export default store;
