<template>
  <li class="flex-item">
      <div class="box">
        <h2>{{ careHome.name }}</h2>
        <div class="content-block compact-hide">
          <div class="is-heading">
            Address
          </div>
          <div>{{ careHome.address1 }} {{ careHome.address2 }}</div>
          <div>{{ careHome.addressCity }}</div>
          <div>{{ careHome.addressCounty }}</div>
          <div>{{ careHome.addressPostcode }}</div>
        </div>
        <div class="content-block compact-hide">
          <div class="is-heading">
            Number
          </div>
          {{ careHome.number }}
        </div>
        <div class="content-block">
          <div class="is-heading">
            Email
          </div>
          {{ careHome.email }}
        </div>
        <div class="content-block">
          <div class="is-heading">
            NHS Number
          </div>
          {{ careHome.nhsNumber }}
        </div>
      </div>
    </li>
</template>

<script>
export default {
  props: {
    careHome: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-item {
  width: 33.333%;
}
.list,
.compact {
  .flex-item {
    width: 100%;
  }
  .box {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    h2 {
      width: 100%;
    }
    .content-block {
      width: 25%;
      padding-right: 1.5rem;
      margin-bottom: 0;
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
}
.compact {
  .compact-hide {
    display: none;
  }
}
</style>
