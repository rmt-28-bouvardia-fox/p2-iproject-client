import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/Register.vue'
import CreateTeam from '../views/CreateTeam.vue'
import HomePage from '../views/Home.vue'
import TeamProfile from '../views/TeamProfile.vue'
import ListPlayers from '../views/PlayersPage.vue'
import PlayerDetail from '../views/PlayerDetail.vue'
import Formation from '../views/Formation.vue'
import Store from '../views/BuyPlayer.vue'
import RandomBuy from '../views/randomBuy.vue'
import Match from '../views/Match.vue'
import OtpPage from '../views/verifyOtp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/verifyOtp',
      name: 'verifyOtp',
      component: OtpPage
    },
    {
      path: '/createTeam',
      name: 'createTeam',
      component: CreateTeam
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/profile',
      name: 'profile',
      component: TeamProfile
    },
    {
      path: '/formation',
      name: 'formation',
      component: Formation
    },
    {
      path: '/myPlayers',
      name: 'myPlayers',
      component: ListPlayers
    },
    {
      path: '/playerDetail/:id',
      name: 'playerDetail',
      component: PlayerDetail
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/randomBuy',
      name: 'randomBuy',
      component: RandomBuy
    },
    {
      path: '/match',
      name: 'match',
      component: Match
    }
  ]
})

router.beforeEach((to, from) => {
  if (localStorage.access_token) {
    if (to.name == 'login' || to.name == 'register' || to.name == 'landingPage') {
      return '/home'
    } 
  }

  if (!localStorage.access_token) {
    if (to.name !== 'login' && to.name !== 'register' && to.name !== 'landingPage' && to.name !== 'verifyOtp') {
      return '/'
    } 
  }

  if (localStorage.team && to.name == 'createTeam') {
    return '/home'
  }
})

export default router
