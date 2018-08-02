import Api from "@/api/api";

export default {
  getAll(page) {
    return Api().get("vehicles?page=" + page);
  },
  getDetails(param) {
    return Api().get("vehicles/" + param);
  }
};
