<template>
  <div class="product">
    <figure class="product__image-wrapper">
      <div class="product__image" :style="{ backgroundImage: `url(${image})` }" />
      <div class="product__icon" @click="toggleWishlist">
        <base-icon name="heart" :color="isInWishlist ? '#e91e63' : '#000'" :fill="isInWishlist ? '#e91e63' : 'none'" />
      </div>
    </figure>
    <div class="product__info">
      <h2 class="product__title">{{ title }}</h2>
      <icon-group name="map-pin" :text="city" />
      <icon-group name="star" :text="review" />
      <icon-group name="dollar-sign" :text="price" />
    </div>
    <div class="product__actions">
      <number-input :count="count" @onIncrement="incrementCount" @onDecrement="decrementCount" />
      <button class="product__button" @click="addToCart">Add to cart</button>
      <span @click="removeFromCart" class="product__close">
        <base-icon v-if="isInCart" name="x" :color="'#f44336'" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductType } from '@/types/Product.types';
import { defineComponent } from '@vue/composition-api';
import BaseIcon from './BaseIcon.vue';
import IconGroup from './IconGroup.vue';
import NumberInput from './NumberInput.vue';

export default defineComponent({
  components: { IconGroup, BaseIcon, NumberInput },
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
      isInWishlist: false,
      isInCart: false,
      count: 1,
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
      if (this.isInWishlist) {
        this.isInWishlist = false;
        return this.$emit('removeFromWishlist', this.product.uuid);
      }
      this.isInWishlist = true;
      return this.$emit('addToWishlist', this.product.uuid);
    },
    incrementCount() {
      this.count += 1;
    },
    decrementCount() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    addToCart() {
      this.isInCart = true;
      return this.$emit('addToCart', { product: this.product, count: this.count });
    },
    removeFromCart() {
      this.isInCart = false;
      this.count = 1;
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
.product__actions {
  display: flex;
}
.product__button {
  padding: 5px 10px;
  cursor: pointer;
}
.product__close {
  display: flex;
  cursor: pointer;
}
</style>
