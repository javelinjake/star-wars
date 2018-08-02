<template>
    <div class="content">
      <h1>
        All Planets
      </h1>
      <div v-if="loading">
        <div class='loader-ring'>
          <div class='loader-ring-light'></div>
          <div class='loader-ring-track'></div>
        </div>
      </div>
      <ul class="list-unstyled flex-grid">
        <li class="flex-item" v-if="planets.previous">
          <div class="paging" @click="getPlanets(planets.previous.slice(-1))">
            Prev Page
          </div>
        </li>
        <li class="flex-item" v-for="planet in planets.results" :key="planet.name">
          <div class="box">
            <h2>{{ planet.name }}</h2>
            <div class="content-block">
              <div class="is-heading">
                Gravity
              </div>
              {{ planet.gravity }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Climate
              </div>
              {{ planet.climate }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Population
              </div>
              {{ planet.population }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Residents
              </div>
              {{ '----' }}
            </div>
            
          </div>
        </li>
        <li class="flex-item" v-if="planets.next">
          <div class="paging" @click="getPlanets(planets.next.slice(-1))">
            Next Page
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import PlanetsApi from "@/api/planets";

export default {
  name: "Planets",
  data() {
    return {
      planets: "",
      loading: true
    };
  },
  mounted() {
    this.getPlanets(1);
  },
  methods: {
    getPlanets: function(page) {
      this.planets = "";
      this.loading = true;
      PlanetsApi.getAll(page).then(response => {
        this.planets = response.data;
        this.loading = false;
      });
    }
  }
};
</script>
