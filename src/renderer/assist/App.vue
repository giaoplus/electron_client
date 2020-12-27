<template>
  <div class="dialog">
    <ViewGithub></ViewGithub>
  </div>
</template>

<script>
import ViewGithub from '../components/ViewGithub';

export default {
  name: 'Dialog',
  components: {
    ViewGithub
  },
  data() {
    return {
      text: 'dialog page'
    }
  }
}
</script>