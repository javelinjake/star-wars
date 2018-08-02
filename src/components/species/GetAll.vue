<template>
    <div class="content">
      <h1>
        All Species
      </h1>
      <router-link class="search-button" to="/species/search">Search</router-link>
      <Loader v-if="loading"></Loader>
      <ul class="list-unstyled flex-grid">
        <li class="flex-item" v-if="species.previous">
          <div class="paging" @click="getSpecies(species.previous.slice(-1))">
            Prev Page
          </div>
        </li>
        <GetDetails v-for="specie in species.results" :key="specie.name" :specie="specie"></GetDetails>
        <li class="flex-item" v-if="species.next">
          <div class="paging" @click="getSpecies(species.next.slice(-1))">
            Next Page
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import SpeciesApi from "@/api/species";
import Loader from "@/components/global/Loader";
import GetDetails from "@/components/species/GetDetails";

export default {
  name: "Species",
  data() {
    return {
      species: "",
      loading: true
    };
  },
  components: {
    GetDetails,
    Loader
  },
  mounted() {
    this.getSpecies(1);
  },
  methods: {
    getSpecies: function(page) {
      this.species = "";
      this.loading = true;
      SpeciesApi.getAll(page).then(response => {
        this.species = response.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss">
.content {
  h1 {
    text-align: center;
  }
}
.box,
.paging {
  padding: 1.5rem;
  text-align: center;
  background-color: #ffffff;
  word-wrap: break-word;
  h2 {
    margin: 0 0 0.5rem 0;
  }
}
.paging {
  padding: 8rem 0;
  background-color: #ecd32c;
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #000000;
    color: #fee123;
  }
}
.content-block {
  margin-bottom: 1.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
}
.is-heading {
  color: #a9a9a9;
}
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: center;
}
.flex-item {
  width: 25%;
  padding: 1.5rem;
}

.search-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ecd32c;
  border: none;
  font-weight: 300;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #fee123;
  }
}
</style>
