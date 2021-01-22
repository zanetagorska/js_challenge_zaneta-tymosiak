<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #203762;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
}
</style>
