<template>
    <div class="content">
      <h1>
        All Species
      </h1>
      <div v-if="loading">
        <div class='loader-ring'>
          <div class='loader-ring-light'></div>
          <div class='loader-ring-track'></div>
        </div>
      </div>
      <ul class="list-unstyled flex-grid">
        <li class="flex-item" v-if="species.previous">
          <div class="paging" @click="getSpecies(species.previous.slice(-1))">
            Prev Page
          </div>
        </li>
        <li class="flex-item" v-for="specie in species.results" :key="specie.name">
          <div class="box">
            <h2>{{ specie.name }}</h2>
            <div class="content-block">
              <div class="is-heading">
                Language
              </div>
              {{ specie.language }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Height
              </div>
              {{ specie.average_height }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Lifespan
              </div>
              {{ specie.average_lifespan }} <span v-if="specie.average_lifespan !== 'unknown'">years</span>
            </div>
          </div>
        </li>
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

export default {
  name: "Species",
  data() {
    return {
      species: "",
      loading: true
    };
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
  .flex-item {
    width: 25%;
    padding: 1.5rem;
  }
}

.loader-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -60px;
  width: 120px;
  height: 120px;
}

.loader-ring-light {
  width: 120px;
  height: 120px;
  -moz-border-radius: 120px;
  -webkit-border-radius: 120px;
  border-radius: 120px;
  -moz-box-shadow: 0 3px 0 #000000;
  -webkit-box-shadow: 0 3px 0 #000000;
  box-shadow: 0 3px 0 #000000;
  animation: rotate-360 2s linear infinite;
}

.loader-ring-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  -moz-border-radius: 120px;
  -webkit-border-radius: 120px;
  border-radius: 120px;
  -moz-box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1) inset;
}

@keyframes rotate-360 {
  from {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
