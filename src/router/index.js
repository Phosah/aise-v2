import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import AistakeFinance from "../views/AistakeFinance.vue";
import Athena from "../views/Athena.vue";
import Works from "../views/Works.vue";
import Xerxes from "../views/Xerxes.vue";
import Pegasus from "../views/Pegasus.vue";
import About from "../views/About.vue";
import OtherWorks from "../views/OtherWorks.vue";
import Doorstep from "../views/Doorstep.vue";
import PowrFinance from "../views/PowrFinance.vue";
import Trustbreed from "../views/Trustbreed.vue";
import CollectAfrica from "../views/CollectAfrica.vue";
import Trigle from "../views/Trigle.vue";
import Fintech from "../views/Fintech.vue";
import Daba from "../views/Daba.vue";
import Bento from "../views/Bento.vue";
import Bitpowr from "../views/Bitpowr.vue";
import Trivadi from "../views/Trivadi.vue";
import MyriaWallet from "../views/MyriaWallet.vue";
import Arc from "../views/Arc.vue";

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
      component: About,
    },
    {
      path: "/fintech",
      name: "fintech",
      component: Fintech,
    },
    {
      path: "/otherworks",
      name: "OtherWorks",
      component: OtherWorks,
    },
    {
      path: "/doorstep",
      name: "Doorstep",
      component: Doorstep,
    },
    {
      path: "/powrfinance",
      name: "PowrFinance",
      component: PowrFinance,
    },
    {
      path: "/trustbreed",
      name: "Trustbreed",
      component: Trustbreed,
    },
    {
      path: "/collectafrica",
      name: "CollectAfrica",
      component: CollectAfrica,
    },
    {
      path: "/trigle",
      name: "Trigle",
      component: Trigle,
    },
    {
      path: "/daba",
      name: "Daba",
      component: Daba,
    },
    {
      path: "/bento",
      name: "Bento",
      component: Bento,
    },
    {
      path: "/bitpowr",
      name: "Bitpowr",
      component: Bitpowr,
    },
    {
      path: "/trivadi",
      name: "Trivadi",
      component: Trivadi,
    },
    {
      path: "/myria",
      name: "MyriaWallet",
      component: MyriaWallet,
    },
    {
      path: "/arc",
      name: "Arc",
      component: Arc,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.afterEach((to, from) => {
  if (from.name) {
    document.documentElement.scrollTop = 0;
    store.dispatch("CloseMenu");
  }
});

export default router;
