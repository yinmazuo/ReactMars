
import * as ActionType from '../constants/ZhihuNewsActionType';
import * as FetchUtils from '../utils/FetchUtils';

export function fetchLatestNews() {
  return {
    type: ActionType.FETCH_LATEST_NEWS,
    payload: FetchUtils.GetZhihuNews('/news/latest')
  };
}

export function fetchBeforeNews(dateStr) {
  return {
    type: ActionType.FETCH_BEFORE_NEWS,
    payload: FetchUtils.GetZhihuNews('/news/before/' + dateStr)
  }
}

export function fetachOneNews(id) {
  return {
    type: ActionType.FETCH_ONE_NEWS,
    payload: FetchUtils.GetZhihuNews('/news/' + id)
  }
}
