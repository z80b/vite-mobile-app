<template>
  <svg aria-hidden="true" :viewBox="`0 0 ${width} ${width}`" :class="$style.root">
    <use :href="`bundle.svg#${name}`" :class="$style.icon" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 24,
  },
});

const width = computed(() => `${props.size}px`);
</script>

<style module>
.root {
  width: v-bind(width);
  height: v-bind(width);
}

.icon {
  width: 100%;
  height: 100%;
}
</style>