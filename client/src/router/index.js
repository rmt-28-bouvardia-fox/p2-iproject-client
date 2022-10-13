import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CategoryPage from "../components/CategoryPage.vue";
import WeatherPage from "../views/WeatherPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage,
    },
    {
      path: "/sports",
      name: "Sports",
      component: CategoryPage,
    },
    {
      path: "/business",
      name: "Business",
      component: CategoryPage,
    },
    {
      path: "/entertainment",
      name: "Entertainment",
      component: CategoryPage,
    },
    {
      path: "/health",
      name: "Health",
      component: CategoryPage,
    },
    {
      path: "/science",
      name: "Science",
      component: CategoryPage,
    },
    {
      path: "/technology",
      name: "Technology",
      component: CategoryPage,
    },
    {
      path: "/weather",
      name: "Weather",
      component: WeatherPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  const status = localStorage.subscriber;
  if (to.name === "Home" && !isAuthenticated) {
    next({ name: "Login" });
  } else if (
    to.name === "Sports" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    to.name === "Business" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    to.name === "Entertainment" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    to.name === "Health" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    to.name === "Science" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    to.name === "Technology" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    to.name === "Weather" &&
    status !== "subscriber" &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else if (
    (to.name === "Login" && isAuthenticated) ||
    (to.name === "Register" && isAuthenticated)
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
