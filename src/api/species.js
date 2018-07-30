import Api from "@/api/api";

export default {
  getAll(page) {
    return Api().get("species?page=" + page);
  },
  getDetails(param) {
    return Api().get("species/" + param);
  }
};
