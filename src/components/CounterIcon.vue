<template>
  <div class="counter-icon">
    <div><base-icon :name="name" /></div>
    <div v-show="count" class="counter-icon__count">{{ count }}</div>
  </div>
</template>

<script lang="ts">
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'CounterIcon',
  components: { BaseIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.counter-icon {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}
.counter-icon__count {
  position: absolute;
  bottom: 0;
  right: -10px;
  border-radius: 50%;
  height: 16px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #203762;
  color: #fff;
  font-size: 12px;
}
</style>
