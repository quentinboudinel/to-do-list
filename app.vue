<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  @apply h-full;
}

#__nuxt {
  @apply flex;
  @apply flex-col;
}
</style>
