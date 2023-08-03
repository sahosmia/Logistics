import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../pages/core/NotFound.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Contact from "../pages/About.vue";
import Fleet from "../pages/Fleet.vue";
import Drivers from "../pages/Drivers.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },

  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "About Us",
    },
  },

  {
    path: "/drivers",
    name: "drivers",
    component: Drivers,
    meta: {
      title: "For Drivers",
    },
  },
  {
    path: "/fleet",
    name: "fleet",
    component: Fleet,
    meta: {
      title: "Fleet",
    },
  },

  {
    path: "/news",
    name: "news",
    component: News,
    meta: {
      title: "News",
    },
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: "Contact Us",
    },
  },

  // Not Found
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: {
      title: "Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-nav",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "Logistic";
  next();
});

export default router;
