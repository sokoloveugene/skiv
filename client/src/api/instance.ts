import axios from "axios";
// eslint-disable-next-line
import { rootStore } from "index";

const instance = axios.create({
  baseURL: "",
});

instance.defaults.timeout = 5000;

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.assign("/");
      rootStore.authStore.setAuth(false);
    }

    return Promise.reject(error);
  }
);

export default instance;
