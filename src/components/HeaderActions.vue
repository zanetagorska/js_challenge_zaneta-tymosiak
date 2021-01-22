<template>
  <div>
    <div>Wishlist products count: {{ wishlistCount }}</div>
    <div>Cart items count: {{ cartCount }}</div>
    <div>Cart total price: {{ cartTotalPrice }}</div>
  </div>
</template>

<script lang="ts">
import { cartCount, cartTotalPrice, wishlishCount } from '@/types/Getter.types';
import { defineComponent } from '@vue/composition-api';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'HeaderActions',
  computed: {
    ...mapGetters([wishlishCount, cartCount, cartTotalPrice]),
  },
});
</script>

<style lang="scss" scoped></style>
