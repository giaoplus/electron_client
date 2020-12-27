<template>
  <div class="main">
    <h1>
      {{name}}
    </h1>
    <button @click="openWindow">click</button>
  </div>
</template>

<script>
const { remote } = require('electron');

export default {
  name: 'appMain',
  data() {
    return {
      name: 'Hello World!!',
    }
  },
  methods: {
    openWindow() {
      const win = new remote.BrowserWindow({
        width: 900,
        height: 600,
        show: false,
        webPreferences: {
          nodeIntegration: true
        }
      });

      win.loadURL('http://localhost:9527/dialog.html');

      win.once('ready-to-show', () => {
        win.show()
      })
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