import Api from "@/api/api";

export default {
  getAll(page) {
    return Api().get("people?page=" + page);
  },
  getDetails(param) {
    return Api().get("people/" + param);
  }
};
