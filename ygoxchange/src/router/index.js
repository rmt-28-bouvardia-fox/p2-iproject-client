import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyBidsView from "../views/MyBidsView.vue";
import MyBidsHomeView from "../components/MyBidsHomeView.vue";
import MyWinningList from "../components/MyWinningList.vue";
import AddNewBidView from "../views/AddNewBidView.vue";
import DatabaseView from "../views/DatabaseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/my-bids",
      name: "my-bids",
      component: MyBidsView,
      children: [
        {
          path: "",
          name: "my-bids-home",
          component: MyBidsHomeView,
        },
        {
          path: "my-winning-list",
          name: "my-winning-list",
          component: MyWinningList,
        },
      ],
    },
    {
      path: "/new-bid",
      name: "new-bid",
      component: AddNewBidView,
    },
    {
      path: "/database",
      name: "database",
      component: DatabaseView,
    },
  ],
});

export default router;
