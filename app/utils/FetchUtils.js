import 'whatwg-fetch'

export function GetZhihuNews(url) {
  return fetch('/zhihu/api/4' + url)
          .then((response) => {
            if (response.ok) {
              return response.json()
            }
            return response.status
          });
}

export function GetV2EX(url) {
  return fetch('/v2ex/api/' + url)
          .then((response) => {
            if (response.ok) {
              return response.json()
            }
            return response.status
          });
}
