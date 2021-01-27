<template>
  <div class="home">
    <Header>
      <mini-cart :totalPrice="totalPrice" :cart="cart" v-if="cart.length" />
    </Header>
    <container>
      <div class="home__product-list">
        <Product
          v-for="product in productList"
          :key="product.id"
          :product="product"
          @addToWishlist="addToWishlist"
          @removeFromWishlist="removeFromWishlist"
          @addToCart="addToCart"
          @removeFromCart="removeFromCart"
        />
      </div>
      <div class="home__load-more" @click="loadMore" v-if="productList.length">
        <base-button>Load more</base-button>
      </div>
    </container>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import Header from '@/components/Header.vue';
import BaseButton from '@/components/BaseButton.vue';
import MiniCart from '@/components/MiniCart.vue';
import { mapState, mapGetters } from 'vuex';
import {
  fetchProductList,
  addIdToWishlist,
  removeIdFromWishlist,
  addItemToCart,
  removeItemFromCart,
  expandProductList,
} from '@/types/Action.types';
import { cartTotalPrice } from '@/types/Getter.types';
import Container from '@/components/Container.vue';
import { DEFAULT_LIMIT } from '@/service';

export default {
  components: { Product, Header, Container, BaseButton, MiniCart },
  name: 'Home',
  computed: {
    ...mapState(['productList', 'cart']),
    ...mapGetters([cartTotalPrice]),
    totalPrice() {
      return `${this.cartTotalPrice} zł`;
    },
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
    loadMore() {
      const offset = this.productList.length / DEFAULT_LIMIT;
      this.$store.dispatch(expandProductList, offset);
    },
  },
  created() {
    this.$store.dispatch(fetchProductList);
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 80px 0 30px;
}
.home__product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
.home__load-more {
  text-align: center;
}
</style>
