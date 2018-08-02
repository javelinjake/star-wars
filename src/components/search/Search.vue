 <template>
  <div class="content">
      <h1>
        Search {{ resource }}
      </h1>
      <router-link class="search-button" :to="'/' + resource">Back to all {{ resource }}</router-link>
      <SearchInput v-model="searchTerm"></SearchInput>
      <SearchResults :searchTerm="searchTerm" :resource="resource"></SearchResults>
  </div>
</template>

<script>
import SearchInput from "@/components/search/SearchInput";
import SearchResults from "@/components/search/SearchResults";

export default {
  name: "search",
  props: {
    resource: String
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  components: {
    SearchInput,
    SearchResults
  }
};
</script>
