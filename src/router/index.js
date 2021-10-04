import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CounterStats from "../views/CounterStats.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter-stats",
    name: "Counter Stats",
    component: CounterStats,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
