<template>
  <div class="home">
    <Header />
    <container>
      <div class="home__product-list" v-if="productList.length > 0">
        <Product
          v-for="product in productList"
          :key="product.id"
          :product="product"
          @addToWishlist="addToWishlist"
          @removeFromWishlist="removeFromWishlist"
          @addToCart="addToCart"
          @removeFromCart="removeFromCart"
        /></div
    ></container>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import Header from '@/components/Header.vue';
import { mapState } from 'vuex';
import {
  fetchProductList,
  addIdToWishlist,
  removeIdFromWishlist,
  addItemToCart,
  removeItemFromCart,
} from '@/types/Action.types';
import Container from '@/components/Container.vue';

export default {
  components: { Product, Header, Container },
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
    addToCart(cartItem) {
      this.$store.dispatch(addItemToCart, cartItem);
    },
    removeFromCart(id) {
      this.$store.dispatch(removeItemFromCart, id);
    },
  },
  created() {
    this.$store.dispatch(fetchProductList);
  },
};
</script>

<style lang="scss" scoped>
.home__product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
</style>
