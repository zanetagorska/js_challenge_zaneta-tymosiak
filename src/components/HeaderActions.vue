<template>
  <div class="header-actions">
    <span class="header-actions__wishlist">
      <counter-icon name="heart" :count="wishlistCount" />
    </span>
    <span @mouseover="handleCartIconHover(true)" @mouseleave="handleCartIconHover(false)">
      <counter-icon name="shopping-bag" :count="cartCount" />
    </span>
  </div>
</template>

<script lang="ts">
import { cartCount, wishlishCount } from '@/types/Getter.types';
import { defineComponent } from '@vue/composition-api';
import { mapGetters } from 'vuex';
import CounterIcon from './CounterIcon.vue';

export default defineComponent({
  components: { CounterIcon },
  name: 'HeaderActions',
  computed: {
    ...mapGetters([wishlishCount, cartCount]),
  },
  methods: {
    handleCartIconHover(shouldShow: boolean) {
      this.$emit('toggleMiniCart', shouldShow);
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
