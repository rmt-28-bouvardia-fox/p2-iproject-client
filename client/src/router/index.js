import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Post from "../views/PostPage.vue";
import Register from "../views/Register.vue";
import Create from "../views/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/post/:id",
      name: "Post",
      component: Post,
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
    },
  ],
});

router.beforeEach((to, from) => {
  if (
    to.name != "Login" &&
    to.name != "Register" &&
    to.name != "Home" &&
    !localStorage.access_token
  ) {
    return "/login";
  }

  if (to.name == "Login" && localStorage.access_token) {
    return "/";
  }
  if (to.name == "Register" && localStorage.access_token) {
    return "/";
  }
});

export default router;
