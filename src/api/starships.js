import Api from "@/api/api";

export default {
  getAll(page) {
    return Api().get("starships?page=" + page);
  },
  getDetails(param) {
    return Api().get("starships/" + param);
  }
};
