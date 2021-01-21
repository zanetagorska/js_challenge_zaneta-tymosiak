<template>
  <div class="home">
    <div>Header</div>
    <div class="home__product-list">
      <Product v-for="product in productList" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import { mapState } from 'vuex';

export default {
  components: { Product },
  name: 'Home',
  computed: {
    ...mapState(['productList']),
  },
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
