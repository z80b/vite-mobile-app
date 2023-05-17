<template>
  <div>
    <header>
      <slot name="header"></slot>
      <Icon name="icon-vite" :size="36"/>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div
      :class="$style.button"
      @click="buttonHovered = !buttonHovered"
    >
      <Icon :name="buttonName" :size="24"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Icon from '@/components/Icon/Icon.vue';

const buttonHovered = ref(true);
const buttonName = computed(() => !buttonHovered.value ? 'header-burger' : 'header-burger-hovered');

</script>

<style module>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: -24px;
  box-shadow: var(--shadowBox);
}
</style>