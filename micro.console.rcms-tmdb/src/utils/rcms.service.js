import axios from "axios";
import { ElLoading } from "element-plus";

const initAxios = axios.create({
  //数据响应过期时间
  timeout: 1800000,
});

// 请求拦截器
initAxios.interceptors.request.use(
  (config) => {
    //在发送之前做点什么
    return config;
  },
  (error) => {
    //对请求错误做点什么
    return Promise.reject(error);
  }
);
// 响应拦截器
initAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 常用请求
const service = {
  get(url, params, headers) {
    return initAxios.get(url, { params, headers });
  },
  post(url, params, headers) {
    return initAxios.post(url, params, { headers });
  },
  put(url, params, headers) {
    return initAxios.put(url, params, { headers });
  },
  delete(url, params, headers) {
    return initAxios.delete(url, { params, headers });
  },
};

//声明一个基础接口变量
let baseURL = "https://api.themoviedb.org/3";

const doRequest = function (type, uri, data, header) {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  const request = service[type](baseURL + uri, data, header);
  loading.close();
  return request;
};

//根据自身需求
const rcms = {
  service: {
    get(uri, data, header) {
      return doRequest("get", uri, data, header);
    },
    put(uri, data, header) {
      return doRequest("put", uri, data, header);
    },
    post(uri, data, header) {
      return doRequest("post", uri, data, header);
    },
    delete(uri, data, header) {
      return doRequest("delete", uri, data, header);
    },
  },
};
//导出
export default rcms;
