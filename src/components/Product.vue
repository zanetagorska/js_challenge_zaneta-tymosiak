<template>
  <div class="product">
    <figure class="product__image-wrapper">
      <div class="product__image" :style="{ backgroundImage: `url(${image})` }" />
      <div class="product__icon" @click="toggleWishlist">
        <base-icon name="heart" :color="isFavourite ? '#e91e63' : '#000'" :fill="isFavourite ? '#e91e63' : 'none'" />
      </div>
    </figure>
    <div class="product__info">
      <h2 class="product__title">{{ title }}</h2>
      <icon-group name="map-pin" :text="city" />
      <icon-group name="star" :text="review" />
      <icon-group name="dollar-sign" :text="price" />
    </div>
  </div>
</template>

<script lang="ts">
import { ProductType } from '@/types/Product.types';
import { defineComponent } from '@vue/composition-api';
import BaseIcon from './BaseIcon.vue';
import IconGroup from './IconGroup.vue';

export default defineComponent({
  components: { IconGroup, BaseIcon },
  name: 'Product',
  props: {
    product: {
      type: Object as () => ProductType,
      required: true,
    },
  },
  data() {
    return {
      title: this.product.title,
      city: this.product.city.name,
      image: this.product.coverImageUrl,
      isFavourite: false,
    };
  },
  computed: {
    review(): string {
      return `${this.product.reviewsAvg} (${this.product.reviewsNumber})`;
    },
    price(): string {
      return `${this.product.retailPrice.formattedIsoValue}`;
    },
  },
  methods: {
    toggleWishlist() {
      if (this.isFavourite) {
        this.isFavourite = false;
        return this.$emit('removeFromWishlist', this.product.uuid);
      }
      this.isFavourite = true;
      return this.$emit('addToWishlist', this.product.uuid);
    },
  },
});
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
.product__image-wrapper {
  position: relative;
}
.product__image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  border-radius: 3px;
}
.product__icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.6);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
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
