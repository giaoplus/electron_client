<template>
  <div>
    <h1>
      {{name}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'appMain',
  data() {
    return {
      name: 'Hello World!!',
    }
  }
}
</script>

<style lang="scss">
$primary-color: white;
$bg: black;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>