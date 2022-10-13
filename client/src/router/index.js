import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import TemplateView from '../views/TemplateView.vue'
import CreateView from '../views/CreateView.vue'
import FinalView from '../views/FinalView.vue'
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/template',
      name: 'template',
      component: TemplateView
    },
    {
      path: '/:coupleName/journey',
      name: 'final',
      component: FinalView
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name == "create" && !localStorage.access_token)
    next({ name: "home" });
  else next();
});

export default router
