import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AistakeFinance from "../views/AistakeFinance.vue";
import Athena from "../views/Athena.vue";
import Works from "../views/Works.vue";
import Xerxes from "../views/Xerxes.vue";
import Pegasus from "../views/Pegasus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/aistakefinance",
      name: "AistakeFinance",
      component: AistakeFinance,
    },
    {
      path: "/athena",
      name: "Athena",
      component: Athena,
    },
    {
      path: "/works",
      name: "Works",
      component: Works,
    },
    {
      path: "/xerxes",
      name: "Xerxes",
      component: Xerxes,
    },
    {
      path: "/pegasus",
      name: "Pegasus",
      component: Pegasus,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;
