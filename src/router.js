import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import GetAllSpecies from "./components/species/GetAll.vue";
import SearchSpecies from "./components/species/Search.vue";
import GetAllCareHomes from "./components/careHomes/GetAll.vue";
import People from "./components/people/People.vue";
import Starships from "./components/starships/Starships.vue";
import Planets from "./components/planets/Planets.vue";
import Vehicles from "./components/vehicles/Vehicles.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/species",
      name: "Species",
      component: GetAllSpecies
    },
    {
      path: "/species/search",
      name: "Species Search",
      component: SearchSpecies
    },
    {
      path: "/carehomes",
      name: "Care Homes",
      component: GetAllCareHomes
    },
    {
      path: "/people",
      name: "People",
      component: People
    },
    {
      path: "/starships",
      name: "Starships",
      component: Starships
    },
    {
      path: "/planets",
      name: "Planets",
      component: Planets
    },
    {
      path: "/vehicles",
      name: "Vehicles",
      component: Vehicles
    }
  ]
});
