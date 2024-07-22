export default defineNuxtConfig({
  app: {
    head: {
      title: "To-do List",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "To-do List",
      short_name: "To-do List",
      description: "To-do List",
      lang: "en",
      theme_color: "dark",
    },
  },
  ui: {
    icons: ["grommet-icons", "material-symbols"],
  },
});
