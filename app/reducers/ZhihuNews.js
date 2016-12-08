import { pendingOf, fulfilledOf } from '../utils/PromiseTypeSuffixes'
import * as ActionType from '../constants/ZhihuNewsActionType'

const initialState = {
  isDone: false,
  isFetching: false,
  data: {}
};

export default function ZhihuNews(state = initialState, action) {
  switch (action.type) {
    case pendingOf(ActionType.FETCH_LATEST_NEWS):
      return Object.assign({}, state, {
        isDone: false,
        isFetching: true
      });
    case fulfilledOf(ActionType.FETCH_LATEST_NEWS):
      return Object.assign({}, state, {
        isDone: true,
        isFetching: false,
        data: action.payload
      });
    case pendingOf(ActionType.FETCH_BEFORE_NEWS):
      return Object.assign({}, state, {
        isDone: false,
        isFetching: true
    });
    case fulfilledOf(ActionType.FETCH_BEFORE_NEWS):
      return Object.assign({}, state, {
        isDone: true,
        isFetching: false,
        data: action.payload
    });
    case pendingOf(ActionType.FETCH_ONE_NEWS):
      return Object.assign({}, state, {
        isDone: false,
        isFetching: true
    });
    case fulfilledOf(ActionType.FETCH_ONE_NEWS):
      return Object.assign({}, state, {
        isDone: true,
        isFetching: false,
        data: action.payload
    });
    default:
      return state;
  }
}
