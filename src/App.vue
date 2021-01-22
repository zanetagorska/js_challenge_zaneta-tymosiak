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
#app {
  color: #0a2b4e;
}
* {
  font-family: 'Lato-Regular', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
