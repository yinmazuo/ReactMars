import * as ActionType from '../constants/V2EXActionType';
import * as FetchUtils from '../utils/FetchUtils';

export function fetchLatestTopics() {
  return {
    type: ActionType.FETCH_LATEST_TOPICS,
    payload: FetchUtils.GetV2EX('topics/latest.json')
  }
}

export function fetchHotTopics() {
  return {
    type: ActionType.FETCH_HOT_TOPICS,
    payload: FetchUtils.GetV2EX('topics/hot.json')
  }
}

export function fetchShowTopics(id) {
  return {
    type: ActionType.FETCH_SHOW_TOPICS,
    payload: FetchUtils.GetV2EX('topics/show.json?id=' + id)
  }
}
