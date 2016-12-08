import { combineReducers } from 'redux'
import test from './test'
import ZhihuNews from './ZhihuNews'
import V2EX from './V2EX'

const rootReducer = combineReducers({
	test,
	ZhihuNews,
	V2EX
});

export default rootReducer;
