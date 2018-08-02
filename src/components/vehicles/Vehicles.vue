<template>
    <div class="content">
      <h1>
        All Vehicles
      </h1>
      <div v-if="loading">
        <div class='loader-ring'>
          <div class='loader-ring-light'></div>
          <div class='loader-ring-track'></div>
        </div>
      </div>
      <ul class="list-unstyled flex-grid">
        <li class="flex-item" v-if="vehicles.previous">
          <div class="paging" @click="getVehicles(vehicles.previous.slice(-1))">
            Prev Page
          </div>
        </li>
        <li class="flex-item" v-for="vehicle in vehicles.results" :key="vehicle.name">
          <div class="box">
            <h2>{{ vehicle.name }}</h2>
            <div class="content-block">
              <div class="is-heading">
                Model
              </div>
              {{ vehicle.birth_year }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Crew
              </div>
              {{ vehicle.gender }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Passengers
              </div>
              {{ vehicle.passengers }}
            </div>
            <div class="content-block">
              <div class="is-heading">
                Pilots
              </div>
              {{ '----' }}
            </div>
            
          </div>
        </li>
        <li class="flex-item" v-if="vehicles.next">
          <div class="paging" @click="getVehicles(vehicles.next.slice(-1))">
            Next Page
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import VehiclesApi from "@/api/vehicles";

export default {
  name: "Vehicles",
  data() {
    return {
      vehicles: "",
      loading: true
    };
  },
  mounted() {
    this.getVehicles(1);
  },
  methods: {
    getVehicles: function(page) {
      this.vehicles = "";
      this.loading = true;
      VehiclesApi.getAll(page).then(response => {
        this.vehicles = response.data;
        this.loading = false;
      });
    }
  }
};
</script>
