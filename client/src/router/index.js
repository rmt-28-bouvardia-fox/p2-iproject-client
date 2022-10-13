import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },{
      path: '/register',
      name: 'register',
      component: registerPage
    }
    
  ]
})

export default router
