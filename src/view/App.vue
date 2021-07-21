<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  background-image: url("./assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.45) 100%);
    backdrop-filter: saturate(3);
  }
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(20px);
}
</style>
