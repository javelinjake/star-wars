<template>
  <li class="flex-item">
      <div class="box">
        <h2>{{ specie.name }}</h2>
        <div class="content-block">
          <div class="is-heading">
            Language
          </div>
          {{ specie.language }}
        </div>
        <div class="content-block">
          <div class="is-heading">
            Height
          </div>
          {{ specie.average_height }}
        </div>
        <div class="content-block">
          <div class="is-heading">
            Lifespan
          </div>
          {{ specie.average_lifespan }} <span v-if="specie.average_lifespan !== 'unknown'">years</span>
        </div>
      </div>
    </li>
</template>

<script>
export default {
  props: {
    specie: {
      type: Object,
      required: true
    }
  }
};
</script>
