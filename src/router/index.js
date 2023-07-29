// router.js
import { createRouter, createWebHistory } from "vue-router";

// Import your Vue components that will be used as pages
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
