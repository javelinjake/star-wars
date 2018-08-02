import Api from "@/api/api";

export default {
  getAll(page) {
    return Api().get("planets?page=" + page);
  },
  getDetails(param) {
    return Api().get("planets/" + param);
  }
};
