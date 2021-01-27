<template>
  <div class="mini-cart-item">
    <div :style="{ backgroundImage: `url(${item.product.coverImageUrl})` }" class="mini-cart-item__image" />
    <div>
      <h3 class="mini-cart-item__title">{{ item.product.title }}</h3>
      <div class="mini-cart-item__count">{{ item.count }} x {{ item.count * item.product.retailPrice.value }} zł</div>
    </div>
  </div>
</template>

<script lang="ts">
import { CartItem } from '@/types/Cart.types';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MiniCartItem',
  props: {
    item: Object as () => CartItem,
  },
});
</script>

<style lang="scss" scoped>
.mini-cart-item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid grey;
}
.mini-cart-item__image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 70px;
  height: 70px;
  border-radius: 3px;
  margin-right: 20px;
}
.mini-cart-item__title {
  max-width: 250px;
  margin-bottom: 5px;
  font-size: 14px;
}
</style>
