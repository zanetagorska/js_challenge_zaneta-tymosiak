<template>
  <div class="header">
    <container>
      <div class="header__content">
        <h1>Company</h1>
        <header-actions @toggleMiniCart="toggleMiniCart" />
        <div class="header__mini-cart" v-show="isMiniCartVisible">
          <slot />
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Container from './Container.vue';
import HeaderActions from './HeaderActions.vue';

export default defineComponent({
  components: { Container, HeaderActions },
  name: 'Header',
  data() {
    return {
      isMiniCartVisible: false,
    };
  },
  methods: {
    toggleMiniCart(bool: boolean) {
      this.isMiniCartVisible = bool;
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  border-bottom: 1px solid #e6e2e2;
  background: #fff;
  z-index: 1;
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__mini-cart {
  position: absolute;
  top: 50px;
  right: 0;
}
</style>
