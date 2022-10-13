import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('../views/register.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      name:'notFound',
      component: () => import('../views/notFound.vue')
    }
  ]
})

router.beforeEach((to,from) => {

  if(to.name == 'login' && localStorage.access_token){
    return({name:'home'})
  }

  if(to.name == 'register' && localStorage.access_token){
    return({name:'home'})
  }

  if(to.name == 'home' && !localStorage.access_token){
    return({name:'login'})
  }
})

export default router
