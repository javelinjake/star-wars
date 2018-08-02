<template>
  <div>
    <Loader v-if="loading"></Loader>
    <ul class="list-unstyled flex-grid">
      <SearchResultsDetails v-for="resource in resourceData.results" :key="resource.name" :resource="resource"></SearchResultsDetails>
      <div class="no-results" v-if="resourceData.count === 0">
        No results found
      </div>
    </ul>
  </div>
</template>

<script>
import SearchApi from "@/api/search";
import Loader from "@/components/global/Loader";
import SearchResultsDetails from "@/components/search/SearchResultsDetails";

export default {
  name: "search-results",
  props: {
    searchTerm: String,
    resource: String
  },
  data() {
    return {
      resourceData: "",
      loading: false,
      resizeTimer: ""
    };
  },
  components: {
    SearchResultsDetails,
    Loader
  },
  watch: {
    searchTerm: function(searchTermParam) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (searchTermParam.length > 2) {
          this.loading = true;
          SearchApi.search(this.resource, searchTermParam).then(response => {
            this.resourceData = response.data;
            this.loading = false;
          });
        } else {
          this.resourceData = "";
          this.loading = false;
        }
      }, 250);
    }
  }
};
</script>

<style lang="scss">
.no-results {
  font-size: 2rem;
  font-weight: 500;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
}
</style>
