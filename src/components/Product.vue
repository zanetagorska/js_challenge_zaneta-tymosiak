<template>
  <div class="product">
    <figure class="product__image-wrapper">
      <div class="product__image" :style="{ backgroundImage: `url(${image})` }" />
      <div class="product__icon" @click="toggleWishlist" data-testid="toggle-wishlist-button">
        <base-icon name="heart" :color="isOnWishlist ? '#e91e63' : '#000'" :fill="isOnWishlist ? '#e91e63' : 'none'" />
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
      <div @click="addToCart" class="product__add-to-cart" data-testid="add-to-cart-button">
        <base-button>Add to cart</base-button>
      </div>
      <span @click="removeFromCart" class="product__close" data-testid="remove-from-cart-button">
        <base-icon v-if="isInCart" name="x" :color="'#f44336'" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductType } from '@/types/Product.types';
import { defineComponent } from '@vue/composition-api';
import BaseButton from './BaseButton.vue';
import BaseIcon from './BaseIcon.vue';
import IconGroup from './IconGroup.vue';
import NumberInput from './NumberInput.vue';

export default defineComponent({
  components: { IconGroup, BaseIcon, NumberInput, BaseButton },
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
      isOnWishlist: false,
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
      if (this.isOnWishlist) {
        this.isOnWishlist = false;
        return this.$emit('removeFromWishlist', this.product.uuid);
      }
      this.isOnWishlist = true;
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
      return this.$emit('removeFromCart', this.product.uuid);
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
  font-size: 18px;
}
.product__actions {
  display: flex;
}
.product__add-to-cart {
  margin-left: 10px;
}
.product__close {
  display: flex;
  cursor: pointer;
}
</style>
