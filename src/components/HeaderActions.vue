<template>
  <div class="header-actions">
    <span class="header-actions__wishlist">
      <counter-icon name="heart" :count="wishlistCount" />
    </span>
    <counter-icon name="shopping-bag" :count="cartCount" />
    <span v-if="cartTotalPrice">{{ totalPrice }}</span>
  </div>
</template>

<script lang="ts">
import { cartCount, cartTotalPrice, wishlishCount } from '@/types/Getter.types';
import { defineComponent } from '@vue/composition-api';
import { mapGetters } from 'vuex';
import CounterIcon from './CounterIcon.vue';

export default defineComponent({
  components: { CounterIcon },
  name: 'HeaderActions',
  computed: {
    ...mapGetters([wishlishCount, cartCount, cartTotalPrice]),
    totalPrice() {
      return `${this.cartTotalPrice} zł`;
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
</style>
