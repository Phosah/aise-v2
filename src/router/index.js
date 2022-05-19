import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AistakeFinance from "../views/AistakeFinance.vue";
import Athena from "../views/Athena.vue";
import Works from "../views/Works.vue";
import Xerxes from "../views/Xerxes.vue";
import Pegasus from "../views/Pegasus.vue";
import Test from "../views/Test.vue";
import About from "../views/About.vue";
import OtherWorks from "../views/OtherWorks.vue";

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
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/otherworks",
      name: "OtherWorks",
      component: OtherWorks,
    },
  ],
});

export default router;
