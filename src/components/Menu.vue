<template>
  <div>
    <Link href="/" :class="$style.link">Home</Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/components/Link.vue';
</script>

<style module>
.link {
  color: var(--fontColorDefault);
}
</style>