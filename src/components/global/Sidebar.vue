<template>
  <nav>
    <div class="logo">
      <img src="https://www.wunschliste.de/gfx/pics/Star-Wars-Logo.jpg" alt="">
    </div>
    <ul class="list-unstyled">
      <li>
        <router-link to="/species">Species</router-link>
      </li>
      <li>
        <router-link to="/people">People</router-link>
      </li>
      <li>
        <router-link to="/starships">Starships</router-link>
      </li>
      <li>
        <router-link to="/planets">Planets</router-link>
      </li>
      <li>
        <router-link to="/vehicles">Vehicles</router-link>
      </li>
      <li>
        <router-link to="/carehomes">Care Homes</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
nav {
  height: 100%;
  background-color: #000000;
}
nav a {
  display: block;
  padding: 1rem 2rem;
  color: #ffffff;
  text-align: center;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
}
.logo img {
  max-width: 100%;
}
</style>
