<template>
  <div class="mini-cart">
    <h3>Your cart</h3>
    <mini-cart-item v-for="item in cart" :key="item.product.uuid" :item="item" />
    <div class="mini-cart__total">Total {{ totalPrice }}</div>
  </div>
</template>

<script lang="ts">
import { CartItem } from '@/types/Cart.types';
import MiniCartItem from './MiniCartItem.vue';

export default {
  name: 'MiniCart',
  props: {
    totalPrice: {
      type: String,
      required: true,
    },
    cart: {
      type: Array as () => CartItem[] | [],
    },
  },
  components: {
    MiniCartItem,
  },
};
</script>

<style lang="scss" scoped>
.mini-cart {
  padding: 20px;
  background: #fff;
  border: 1px solid grey;
}
.mini-cart__total {
  padding: 10px 0;
  text-align: right;
}
</style>
