import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Wishlist from "../views/Wishlist.vue";
import Checkout from "../views/Order.vue";
import Register from "../views/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "/", name: "home", component: Home },
    { path: "/wishlist", name: "wishlist", component: Wishlist },
    { path: "/checkout/:wishlistId", name: "checkout", component: Checkout },
  ],
});

router.beforeEach((to, from) => {
  if (to.name == "login" && localStorage.access_token) {
    return "/";
  }

  if (to.name == "register" && localStorage.access_token) {
    return "/";
  }

  if (to.name == "home" && !localStorage.access_token) {
    return "/login";
  }
  if (to.name == "wishlist" && !localStorage.access_token) {
    return "/login";
  }
  if (to.name == "checkout" && !localStorage.access_token) {
    return "/login";
  }
  // if (to.name == "login" && !localStorage.access_token) {
  //   return "/login";
  // }

  // if (to.name == "register" && !localStorage.access_token) {
  //   return "/register";
  // }
});

export default router;
