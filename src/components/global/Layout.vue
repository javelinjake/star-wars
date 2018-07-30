<template>
  <div id="app" class="page">
    <div class="page-sidebar">
      <app-sidebar></app-sidebar>
    </div>
    <div class="page-content">
      <router-view></router-view>
      <!-- <app-footer></app-footer> -->
    </div>
  </div>
</template>

<script>
import AppSidebar from "./Sidebar.vue";
import AppFooter from "./Footer.vue";

export default {
  name: "app",
  components: {
    "app-sidebar": AppSidebar,
    "app-footer": AppFooter
  }
};
</script>

<style lang="scss">
.page {
  height: 100%;
  padding-left: 20rem;
  background-color: #fee123;
}
.page-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 20rem;
  height: 100%;
}
.page-content {
  height: 100%;
  padding: 2.5rem;
  overflow-x: auto;
  position: relative;
}
</style>
