import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Wishlist from "../views/Wishlist.vue";
import Payment from "../views/Payment.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/", name: "home", component: Home },
    { path: "/wishlist", name: "wishlist", component: Wishlist },
    { path: "/payment", name: "payment", component: Payment },
  ],
});

router.beforeEach((to, from) => {
  if (to.name == "login" && localStorage.access_token) {
    return "/";
  }

  if (to.name !== "login" && !localStorage.access_token) {
    return "/login";
  }
});

export default router;
