<template>
  <div class="product">
    <div class="product__image" />
    <div class="product__info">
      <h2 class="product__title">Tour salta fila dei Musei Vaticani</h2>
      <icon-group name="map-pin" text="Roma" />
      <icon-group name="star" text="4.6 (25)" />
      <icon-group name="dollar-sign" text="$67 / per day" />
    </div>
  </div>
</template>

<script lang="ts">
import IconGroup from './IconGroup.vue';

export default {
  components: { IconGroup },
  name: 'Product',
};
</script>

<style lang="scss" scoped>
.product {
  flex: 1 0 30%;
  padding: 20px;
  margin: 20px;
  border: 1px solid #e6e2e2;
  border-radius: 3px;

  &:hover {
    background: #f3f0f0;
  }
}
.product__image {
  background-image: url('../assets/images/activity_image.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  border-radius: 3px;
}
.product__info {
  margin-top: 20px;
  line-height: 1.3;
}
.product__title {
  margin-bottom: 10px;
  font-size: 20px;
}
</style>
