structure similar to - https://github.com/bstavroulakis/vue-wordpress-pwa/tree/master/src

- src
  - assets
    - images
        logo.png
    - fonts
        web-font.woff
  - components
    - global
        Layout.vue
        Header.vue
        Sidebar.vue
        Footer.vue
    - dashboard
        Dashboard.vue
    - user
        User.vue
        AddUser.vue
        SearchUsers.vue
        ViewUser.vue
    - home
        Home.vue
        AddHome.vue
        SearchHomes.vue
        ViewHome.vue
    - search
        Search.vue
  - scss
    - base
        generic.scss
        normalize.scss
        grid.scss
        mixins.scss
    - helpers
        aligns.scss
        spacing.scss
    - elements
        buttons.scss
        content.scss
      - forms
          inputs.scss
          checkboxes.scss
      - charts
          line-graph.scss
          pie-chart.scss
  - api
      users.js
      homes.js
      services.js
  - vuex
    - users
        actions.js
        getters.js
        index.js
        mutations.js
    - homes
        actions.js
        getters.js
        index.js
        mutations.js
    - services
        actions.js
        getters.js
        index.js
        mutations.js
    app.config.js
    app.js
    router.js
    service-worker.js


CSS framework - Kube or Bulma - https://github.com/imperavi/kubeframework/tree/master/kube/src/sass