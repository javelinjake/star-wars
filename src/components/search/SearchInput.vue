 <template>
  <div class="search-input">
    <label for="search">Search</label>
    <input @input="onChange($event.target.value)" id="search" type="text">
  </div>
</template>

<script>
import SearchInput from "@/components/search/SearchInput";

export default {
  name: "search-input",
  components: {
    SearchInput
  },
  methods: {
    onChange(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss">
.search-input {
  width: 40rem;
  margin: 2rem auto;
  label {
    display: none;
  }
  input {
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    background-color: #ecd32c;
    border: 1px solid #dac21f;
    font-size: 2rem;
    &:focus {
      outline: none;
    }
  }
}
</style>
