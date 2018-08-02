import Api from "@/api/api";

export default {
  search(resource, query) {
    return Api().get(resource + "?search=" + query);
  }
};
