import axios from "axios";

let server = axios.create({
  timeout: 5000,
});
server.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
server.interceptors.response.use(
  function (response) {
    let { data } = response;
    // Do something with response data
    if (response.status == 200) {
    }
    return {
      data,
    };
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default server;
