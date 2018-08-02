<template>
  <li class="flex-item">
      <div class="box">
        <h2>{{ resource.name }}</h2>
        <div class="content-block">
          <div class="is-heading">
            Language
          </div>
          {{ resource.language }}
        </div>
        <div class="content-block">
          <div class="is-heading">
            Height
          </div>
          {{ resource.average_height }}
        </div>
        <div class="content-block">
          <div class="is-heading">
            Lifespan
          </div>
          {{ resource.average_lifespan }} <span v-if="resource.average_lifespan !== 'unknown'">years</span>
        </div>
      </div>
    </li>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
};
</script>
