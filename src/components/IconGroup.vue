<template>
  <div class="icon-group">
    <div><base-icon :name="name" /></div>
    <label class="icon-group__text">{{ text }}</label>
  </div>
</template>

<script lang="ts">
import BaseIcon from './BaseIcon.vue';

export default {
  components: { BaseIcon },
  name: 'IconGroup',
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-group {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.icon-group__text {
  margin-left: 5px;
}
</style>
