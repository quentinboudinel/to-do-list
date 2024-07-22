<template>
  <header class="p-4 bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
    <h1 class="text-6xl">To-do list</h1>
  </header>

  <main
    class="p-4 grow flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
    as="main"
  >
    <div class="max-w-screen-md w-full mx-auto grow flex flex-col">
      <slot></slot>
    </div>
  </main>

  <footer
    class="p-4 flex justify-between bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
  >
    <NuxtLink class="hover:underline" to="/about">About</NuxtLink>

    <a href="https://github.com/quentinboudinel/to-do-list" target="_blank">
      <UIcon name="i-grommet-icons-github" />
    </a>
  </footer>
</template>
