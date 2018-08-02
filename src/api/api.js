import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import config from "@/config.js";
import careHomeData from "@/mockData/careHome.js";

export default param => {
  let instance = axios.create({
    baseURL: config.api.url,
    withCredentials: config.api.withCredentials,
    headers: config.api.headers
  });

  if (param === "mock") {
    let mock = new MockAdapter(instance, {
      delayResponse: config.api.mockDelay
    });
    mock.onGet("/careHomes").reply(200, {
      careHomes: careHomeData.data
    });
  }

  return instance;
};
