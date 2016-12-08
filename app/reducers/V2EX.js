import { pendingOf, fulfilledOf } from '../utils/PromiseTypeSuffixes'
import * as ActionType from '../constants/V2EXActionType'

const initialState = {
  isDone: false,
  isFetching: false,
  data: {}
};

export default function V2EX(state = initialState, action) {
  switch (action.type) {
    case pendingOf(ActionType.FETCH_LATEST_TOPICS):
      return Object.assign({}, state, {
        isDone: false,
        isFetching: true
      });
    case fulfilledOf(ActionType.FETCH_LATEST_TOPICS):
      return Object.assign({}, state, {
        isDone: true,
        isFetching: false,
        data: action.payload
      });
    case pendingOf(ActionType.FETCH_HOT_TOPICS):
      return Object.assign({}, state, {
        isDone: false,
        isFetching: true
    });
    case fulfilledOf(ActionType.FETCH_HOT_TOPICS):
      return Object.assign({}, state, {
        isDone: true,
        isFetching: false,
        data: action.payload
    });
    case pendingOf(ActionType.FETCH_SHOW_TOPICS):
      return Object.assign({}, state, {
        isDone: false,
        isFetching: true
    });
    case fulfilledOf(ActionType.FETCH_SHOW_TOPICS):
      return Object.assign({}, state, {
        isDone: true,
        isFetching: false,
        data: action.payload
    });
    default:
      return state;
  }
}
