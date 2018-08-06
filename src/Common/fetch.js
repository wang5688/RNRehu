// https://rehu.btime.com/channel/list?protocol=2&pro=rehu&os_type=Android
/**
 * fetch方法
 */

function checkStatus(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/**
 * 拼接请求url
 * @param  {[type]} url   [description]
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
const attachParams = (url, param) => {
  if (!param) {
    return url;
  }
  let newUrl = /[?]/g.test(url) ? url : url + '?';
  Object.keys(param).forEach((key) => {
    if (key === 'url' || key === 'src') {
      param[key] = encodeURIComponent(param[key]);
    }
    newUrl += `&${key}=${param[key]}`;
  });
  return newUrl;
}

const getResult = (result) => {
  const code = result.errno === undefined ? result.code : result.errno;
  if (result && code === 0) {
    return result.data;
  } else {
    return result;
  }
}

/**
 * post方法
 * @param {[type]} url        [description]
 * @param {Object} [param={}] [description]
 */
export const POST = (url, param = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Types': 'application/json'
    },
    body: JSON.stringify(param),
  }).then(checkStatus)
  .then((response) => response.json())
  .then(getResult);
}

export const GET = (url, param = {}) => {
  return fetch(attachParams(url, param), {
    method: 'GET',
  }).then(checkStatus)
  .then((response) => response.json())
  .then(getResult);
}
