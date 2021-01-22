<template>
  <div class="header">
    <container>
      <div class="header__content">
        <h1>Company</h1>
        <header-actions />
      </div>
    </container>
  </div>
</template>

<script lang="ts">
import Container from './Container.vue';
import HeaderActions from './HeaderActions.vue';

export default {
  components: { Container, HeaderActions },
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  border-bottom: 1px solid #e6e2e2;
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
