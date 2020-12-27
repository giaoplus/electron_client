<template>
  <div class="main">
    <h1>
      {{name}}
    </h1>
    <button @click="openWindow">click</button>
  </div>
</template>

<script>
import newWindow from '../../main/utils/window';

export default {
  name: 'appMain',
  data() {
    return {
      name: 'Hello World!!',
      win: null
    }
  },
  methods: {
    openWindow() {
      this.win = new newWindow();
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/index.scss";
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/img/1562391151583.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>