import axios from "axios";
// import { rootStore } from "index";

const instance = axios.create({
  baseURL: "",
});

instance.defaults.timeout = 5000;

instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.assign("/");
      // TODO resolve cycle dep problem
      // rootStore.authStore.setAuth(false);
    }

    return Promise.reject(error);
  }
);

export default instance;
