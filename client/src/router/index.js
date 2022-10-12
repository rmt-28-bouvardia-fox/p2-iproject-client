import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import MyList from "../views/MyList.vue"
import Detail from "../views/Detail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: MyList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
router.beforeEach((to, form, next) => {
  if (to.name == "login" && localStorage.token) {
    next('/')
  } else {
    next ()
  }
});

export default router
