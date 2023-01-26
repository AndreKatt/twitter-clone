import axios, { AxiosHeaders } from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (config.headers && token) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axios };
