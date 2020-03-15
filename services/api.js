import Axios from 'axios'

const baseUrl =
  'https://cors-anywhere.herokuapp.com/https://dev01.bailey.fabric.zone/commerceApi/'

const apiConfig = {
  post: 'posts',
  item: 'item'
}

for (const api of Object.keys(apiConfig)) {
  if (apiConfig.hasOwnProperty(api)) {
    apiConfig[api] = `${baseUrl}${apiConfig[api]}`
  }
}

export const callApi = ({
  url = '/',
  params = {},
  data = {},
  method = 'get',
  headers = {
    'Content-Type': 'application/json',
    'x-site-context': JSON.stringify({
      date: '2019-10-25T08:38:22.570Z',
      channel: 12
    })
  },
  ...rest
} = {}) =>
  Axios({
    method,
    url,
    params,
    data,
    headers,
    ...rest
  }).then(({ data: res }) => res)

export default apiConfig
