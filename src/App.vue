<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '@/views/Home.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #444a59;
}
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
