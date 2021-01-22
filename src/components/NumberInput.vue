<template>
  <div class="number-input">
    <button type="button" class="number-input__control" @click="decrementValue">
      <base-icon name="minus" color="#fff" />
    </button>
    <div class="number-input__count">
      <input type="number" disabled step="1" v-model="count" />
    </div>
    <button type="button" class="number-input__control" @click="incrementValue">
      <base-icon name="plus" color="#fff" />
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
  height: 35px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: #203762;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
}

input {
  height: 35px;
  width: 40px;
  text-align: center;
  background: transparent;
  outline: none;
  border: 1px solid #203762;
  color: black;
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
