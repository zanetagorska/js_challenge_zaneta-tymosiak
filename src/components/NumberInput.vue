<template>
  <div class="number-input">
    <button type="button" class="number-input__control" @click="decrementValue">
      <base-icon name="minus" />
    </button>
    <div class="number-input__count">
      <input type="number" autocomplete="on" step="1" v-model="count" />
    </div>
    <button type="button" class="number-input__control" @click="incrementValue">
      <base-icon name="plus" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BaseIcon from './BaseIcon.vue';

export default defineComponent({
  components: { BaseIcon },
  name: 'NumberInput',
  props: {
    count: { type: Number, required: true },
  },
  methods: {
    incrementValue() {
      this.$emit('onIncrement');
    },
    decrementValue() {
      this.$emit('onDecrement');
    },
  },
});
</script>

<style lang="scss" scoped>
.number-input {
  display: flex;
}
.number-input__control {
  display: flex;
  align-items: center;
  height: 32px;
  cursor: pointer;
}

input {
  height: 32px;
  width: 40px;
  text-align: center;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
