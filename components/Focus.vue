<script setup lang="ts">
const isFocused = ref(false);
</script>

<template>
  <slot
    v-if="isFocused"
    name="in"
    :isFocused="isFocused"
    :props="{
      onFocusout() {
        isFocused = false;
      },
    }"
  ></slot>
  <slot
    v-else
    name="out"
    :props="{
      onFocusin() {
        isFocused = true;
      },
    }"
  ></slot>
</template>
