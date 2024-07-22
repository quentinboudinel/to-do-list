// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "To-do List",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vite-pwa/nuxt"],
  ui: {
    icons: ["grommet-icons", "material-symbols"],
  },
});