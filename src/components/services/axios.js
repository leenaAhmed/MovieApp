import axios from "axios";
import Store from "../../store/store";
import { changeLoader } from "../../store/action/loader";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
axiosInstance.interceptors.request.use(
  function (config) {
    Store.dispatch(changeLoader(true));

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    Store.dispatch(changeLoader(false));

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
