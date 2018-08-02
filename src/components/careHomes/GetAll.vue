<template>
    <div class="content">
      <h1>
        All Care Homes
      </h1>
      <button class="search-button" @click="openFilter">Filter</button>
      <div class="filter" v-if="filter">
        <button @click="changeView('list')">
          List view
        </button>
        <button @click="changeView('grid')">
          Grid view
        </button>
        <button @click="changeView('compact')">
          Compact view
        </button>
        <button>
          Order by name
        </button>
      </div>
      <Loader v-if="loading"></Loader>
      <ul class="list-unstyled flex-grid" :class=view>
        <GetDetails v-for="careHome in careHomes.careHomes" :key="careHome.id" :careHome="careHome"></GetDetails>
      </ul>
    </div>
</template>

<script>
import CareHomesApi from "@/api/careHomes";
import Loader from "@/components/global/Loader";
import GetDetails from "@/components/careHomes/GetDetails";

export default {
  name: "CareHomes",
  data() {
    return {
      careHomes: "",
      loading: true,
      view: "grid",
      filter: false
    };
  },
  components: {
    Loader,
    GetDetails
  },
  mounted() {
    this.getCareHomes();
  },
  methods: {
    getCareHomes() {
      CareHomesApi.getAll().then(response => {
        this.careHomes = response.data;
        this.loading = false;
      });
    },
    changeView(view) {
      this.view = view;
    },
    openFilter() {
      this.filter = this.filter ? false : true;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  padding: 1.5rem;
  text-align: center;
  background-color: #ffffff;
  word-wrap: break-word;
  h2 {
    margin: 0 0 0.5rem 0;
  }
}
.search-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ecd32c;
  border: none;
  font-weight: 300;
  padding: 1rem 2rem;
  &:hover {
    background-color: #000000;
    color: #fee123;
  }
}
.filter {
  width: 100%;
  height: 5rem;
  background-color: #ecd32c;
  margin: 1rem 0;
  text-align: center;
}
</style>
