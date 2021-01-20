<template>
  <div class="home">
    <div>Header</div>
    <div class="home__product-list">
      <product />
      <product />
      <product />
      <product />
      <product />
      <product />
    </div>
  </div>
</template>

<script lang="ts">
import Product from '@/components/Product.vue';
export default {
  components: { Product },
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: auto;
}
.home__product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
</style>
