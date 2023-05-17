<template>
  <a :href="href" :class="$style.root">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
  defineProps({
    href: {
      type: String,
      default: '',
    },
  });
</script>

<style module>
.root {
  &:hover {
    color: red;
  }
}
</style>