import axios from "axios";
import config from "@/config.js";

export default () => {
  return axios.create({
    baseURL: config.api.url,
    withCredentials: config.api.withCredentials,
    headers: config.api.headers
  });
};
