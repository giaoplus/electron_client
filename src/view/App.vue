<template>
  <n-layout class="lc-layout" style="height: 100%; width: 100%;">
    <n-layout-header class="lc-layout-header" bordered style="height: 80px;">
      <MenuBar></MenuBar>
    </n-layout-header>
    <n-layout
      has-sider
      position="absolute"
      style="top: 80px; bottom: 48px; background-color: transparent;">
      <n-layout-sider
        class="lc-layout-sider"
        bordered
        :native-scrollbar="false"
        content-style="padding: 24px">
      </n-layout-sider>
      <n-layout-content
        class="lc-layout-content"
        :native-scrollbar="false"
        content-style="padding: 24px">
      </n-layout-content>
    </n-layout>
    <n-layout-footer
      class="lc-layout-footer"
      position="absolute"
      style="height: 48px; padding:24px;"
      bordered>
    </n-layout-footer>
  </n-layout>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import MenuBar from './components/MenuBar.vue'

export default defineComponent({
  components: {
    MenuBar
  },
  setup() {
    return {
      title: ref('test title')
    }
  }
})
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
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(20px);
  .lc-layout {
    // background-color: rgba(16 18 27 / 40%);
    background-color: transparent;
    backdrop-filter: blur(5px);
    .lc-layout-header {
      background-color: transparent;
      border-color: rgb(255 255 255 / 60%);
    }
    .lc-layout-sider {
      background-color: transparent;
      border-color: rgb(255 255 255 / 60%);
    }
    .lc-layout-content {
      background-color: transparent;
      border-color: rgb(255 255 255 / 60%);
    }
    .lc-layout-footer {
      background-color: transparent;
      border-color: rgb(255 255 255 / 60%);
    }
  }
}
</style>
