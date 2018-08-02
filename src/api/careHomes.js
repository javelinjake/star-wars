import Api from "@/api/api";

export default {
  getAll() {
    return Api("mock").get("careHomes");
  },
  getDetails(param) {
    return Api().get("species/" + param);
  }
};
