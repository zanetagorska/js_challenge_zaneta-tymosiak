<template>
  <div class="c-base-icon" v-html="svg"></div>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#000',
    },
    fill: {
      type: String,
      default: 'none',
    },
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        width: this.width,
        height: this.height,
        color: this.color,
        fill: this.fill,
      });
    },
  },
};
</script>

<style scoped>
.c-base-icon {
  display: inline-flex;
  align-items: center;
}
</style>
