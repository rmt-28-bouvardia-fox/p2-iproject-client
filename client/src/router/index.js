import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
import homePage from '../views/homePage.vue'
import detailPage from '../views/detailPage.vue'
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
    },{
      path: '/',
      name: 'home',
      component: homePage
    },{
      path: '/details',
      name: 'details',
      component: detailPage
    }
    
  ]
})

export default router
