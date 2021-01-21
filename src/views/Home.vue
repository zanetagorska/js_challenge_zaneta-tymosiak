<template>
  <div class="home">
    <div>Header</div>
    <div class="home__product-list" v-if="productList.length > 0">
      <Product
        v-for="product in productList"
        :key="product.id"
        :product="product"
        @addToWishlist="addToWishlist"
        @removeFromWishlist="removeFromWishlist"
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import { mapState } from 'vuex';
import { fetchProductList, addIdToWishlist, removeIdFromWishlist } from '@/types/Action.types';

export default {
  components: { Product },
  name: 'Home',
  computed: {
    ...mapState(['productList']),
  },
  methods: {
    addToWishlist(id) {
      this.$store.dispatch(addIdToWishlist, id);
    },
    removeFromWishlist(id) {
      this.$store.dispatch(removeIdFromWishlist, id);
    },
  },
  created() {
    this.$store.dispatch(fetchProductList);
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
