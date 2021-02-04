<template>
  <div class="header-actions">
    <span class="header-actions__wishlist">
      <counter-icon name="heart" :count="wishlistCount" />
    </span>
    <span @mouseover="handleCartIconHover(true)" @mouseleave="handleCartIconHover(false)">
      <span class="header-actions__cart-icon-wrapper">
        <counter-icon name="shopping-bag" :count="cartCount" />
      </span>
      <div class="header-actions__mini-cart" v-show="isMiniCartVisible" v-if="cartCount">
        <mini-cart :totalPrice="cartTotalPrice" :cart="cart.cart" />
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { cartCount, cartTotalPrice, wishlishCount } from '@/types/Getter.types';
import { defineComponent } from '@vue/composition-api';
import { mapGetters, mapState } from 'vuex';
import CounterIcon from './CounterIcon.vue';
import MiniCart from './MiniCart.vue';

export default defineComponent({
  components: { CounterIcon, MiniCart },
  name: 'HeaderActions',
  data() {
    return {
      isMiniCartVisible: false,
    };
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters([wishlishCount, cartCount, cartTotalPrice]),
  },
  methods: {
    handleCartIconHover(shouldShow: boolean) {
      this.isMiniCartVisible = shouldShow;
    },
  },
});
</script>
<style lang="scss" scoped>
.header-actions {
  display: flex;
  align-items: center;
}
.header-actions__wishlist {
  margin-right: 10px;
}
.header-actions__cart-icon-wrapper {
  cursor: pointer;
}
.header-actions__mini-cart {
  position: absolute;
  top: 50px;
  right: 0;
}
</style>
