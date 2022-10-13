import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DetailPage from "../views/DetailArisan.vue";
import MyArisanPage from "../views/MyArisanPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/myarisan",
      name: "myarisan",
      component: MyArisanPage,
    },
    {
      path: "/myarisan/:id",
      name: "detail",
      component: DetailPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const login = localStorage.access_token;
  if (to.name == "home" && !login) {
    next({ name: "login" });
  } else if (to.name == "login" && localStorage.access_token) {
    next({ name: "home" });
  } else if (to.name == "myarisan" && !login) {
    next({ name: "login" });
  } else if (to.name == "register" && login) {
    next({ name: "home" });
  } else {
    next()
  }
});

export default router;
