<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Container',
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
</style>
