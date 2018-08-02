<template>
  <div class='loader-ring'>
    <div class='loader-ring-light'></div>
    <div class='loader-ring-track'></div>
  </div>
</template>

<style lang="scss">
.loader-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -60px;
  width: 120px;
  height: 120px;
}

.loader-ring-light {
  width: 120px;
  height: 120px;
  -moz-border-radius: 120px;
  -webkit-border-radius: 120px;
  border-radius: 120px;
  -moz-box-shadow: 0 3px 0 #000000;
  -webkit-box-shadow: 0 3px 0 #000000;
  box-shadow: 0 3px 0 #000000;
  animation: rotate-360 2s linear infinite;
}

.loader-ring-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  -moz-border-radius: 120px;
  -webkit-border-radius: 120px;
  border-radius: 120px;
  -moz-box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1) inset;
}

@keyframes rotate-360 {
  from {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
