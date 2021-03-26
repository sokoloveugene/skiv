import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

instance.defaults.timeout = 5000;

export default instance;
