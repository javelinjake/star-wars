<template>
    <div class="content">
      <h1>
        All Starships
      </h1>
      <div v-if="loading">
        <div class='loader-ring'>
          <div class='loader-ring-light'></div>
          <div class='loader-ring-track'></div>
        </div>
      </div>
      <ul class="list-unstyled flex-grid">
        <li class="flex-item" v-if="starships.previous">
          <div class="paging" @click="getStarships(starships.previous.slice(-1))">
            Prev Page
          </div>
        </li>
        <li class="flex-item" v-for="starship in starships.results" :key="starship.name">
          <div class="box">
            <h2>{{ starship.name }}</h2>
            <div class="content-block">
              <div class="is-heading">
                Model
              </div>
              {{ starship.model }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Cost
              </div>
              {{ starship.cost_in_credits }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Passengers
              </div>
              {{ starship.passengers }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Pilots
              </div>
              {{ '----' }}
            </div>
            
          </div>
        </li>
        <li class="flex-item" v-if="starships.next">
          <div class="paging" @click="getStarships(starships.next.slice(-1))">
            Next Page
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import StarshipsApi from "@/api/starships";

export default {
  name: "Starships",
  data() {
    return {
      starships: "",
      loading: true
    };
  },
  mounted() {
    this.getStarships(1);
  },
  methods: {
    getStarships: function(page) {
      this.starships = "";
      this.loading = true;
      StarshipsApi.getAll(page).then(response => {
        this.starships = response.data;
        this.loading = false;
      });
    }
  }
};
</script>
