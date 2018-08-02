import Vue from "vue";
import App from "./components/global/Layout.vue";
import router from "./router";
import "./service-worker";

import "./scss/styles.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");