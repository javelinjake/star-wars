<template>
    <li class="flex-item">
        <div class="box">
        <h2>{{ person.name }}</h2>
        <div class="content-block">
            <div class="is-heading">
            Birth year
            </div>
            {{ person.birth_year }}
        </div>
        <div class="content-block">
            <div class="is-heading">
            Gender
            </div>
            {{ person.gender }}
        </div>
        <div class="content-block">
            <div class="is-heading">
            Homeworld
            </div>
            {{ getPlanet(person.homeworld) }}
        </div>
        <div class="content-block">
            <div class="is-heading">
            Species
            </div>
            {{ '----' }}
        </div>
        <div class="content-block">
            <div class="is-heading">
            Starships
            </div>
            {{ '----' }}
        </div>
        </div>
    </li>
        
</template>

<script>
import PlanetsApi from "@/api/planets";

export default {
  name: "SwListItem",
  props: ["person"],
  data() {
    return {
      message: "",
      homeworld: ""
    };
  },
  methods: {
    getPlanet(planetUrl) {
      let urlSubstr = planetUrl.substring(planetUrl.lastIndexOf("planets/"));
      let planetId = urlSubstr.substring(
        urlSubstr.indexOf("/") + 1,
        urlSubstr.lastIndexOf("/")
      );

      // console.log(urlSubstr);

      PlanetsApi.getDetails(planetId).then(response => {
        this.homeworld = response.data.name;
      });

      return this.homeworld;
    }
  },
  mounted() {
    // this.getPlanet(planetUrl);
  }
};
</script>
