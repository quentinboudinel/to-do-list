<script setup lang="ts">
const { default: _default } = defineProps<{ default?: any }>();

const value = ref({ value: _default });
</script>

<template>
  <slot :value="value"></slot>
</template>
