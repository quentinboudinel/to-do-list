import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    ..._routes,
    {
      name: "about",
      path: "/about",
      component: () => import("~/pages/index.vue").then((r) => r.default || r),
    },
  ],
};
