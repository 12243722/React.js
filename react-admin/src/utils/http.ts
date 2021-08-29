import { extend } from 'umi-request';
import { message } from 'antd';

const request = extend({
  prefix: 'http://pudge.wang:3000/api',
  timeout: 1000,
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // },
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  console.log
  return {
    url: url,
    options: options,
  };
});

// response拦截器, 处理response
request.interceptors.response.use((response: any, options: any) => {
  const codeMaps = {
    404: '路径错了',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  } as any;
  if (codeMaps[response.status]) {
    message.error(codeMaps[response.status]);
  } else {
    return response;
  }
});

const http = {
  get(url: string, params?: Object) {
    return request(url, {
      method: 'get',
      params,
    })
      .then((response) => {
        return response
      })
      .catch((error) => {
        message.error(error.message);
      });
  },
  post(url: string, data?: Object) {
    return request(url, {
      method: 'post',
      data: data
    })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        message.error(error.message);
      });
  }
}

export default http;

