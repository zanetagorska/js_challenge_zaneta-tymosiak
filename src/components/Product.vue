<template>
  <div class="product">
    <div class="product__image" />
    <div class="product__info">
      <h2 class="product__title">Tour salta fila dei Musei Vaticani</h2>
      <div>Roma</div>
      <div>4.6(25)</div>
      <div>$67</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
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
  font-size: 20px;
}
/* BG image */
</style>
