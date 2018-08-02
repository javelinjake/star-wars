<template>
    <div class="content">
      <h1>
        All People
      </h1>
      <div v-if="loading">
        <div class='loader-ring'>
          <div class='loader-ring-light'></div>
          <div class='loader-ring-track'></div>
        </div>
      </div>
      <ul class="list-unstyled flex-grid">
        <li class="flex-item" v-if="people.previous">
          <div class="paging" @click="getPeople(people.previous.slice(-1))">
            Prev Page
          </div>
        </li>

        <GetDetails v-for="person in people.results" :key="person.name" :person="person"></GetDetails>
        
        <li class="flex-item" v-if="people.next">
          <div class="paging" @click="getPeople(people.next.slice(-1))">
            Next Page
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import PeopleApi from "@/api/people";
import GetDetails from "@/components/people/GetDetails";

export default {
  name: "People",
  components: {
    GetDetails
  },
  data() {
    return {
      people: "",
      loading: true
    };
  },
  mounted() {
    this.getPeople(1);
  },
  methods: {
    getPeople: function(page) {
      this.people = "";
      this.loading = true;
      PeopleApi.getAll(page).then(response => {
        this.people = response.data;
        this.loading = false;
      });
    }
  }
};
</script>
