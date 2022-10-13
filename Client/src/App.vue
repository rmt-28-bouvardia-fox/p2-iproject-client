<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import { usePlayerStore } from './stores/player';
import { useUserStore } from './stores/user'
import Preloader from './components/Preloader.vue'
import PreloaderMatch from './components/PreloaderMatch.vue'


export default {
  components: {
    Navbar,
    Sidebar,
    Preloader,
    PreloaderMatch
  },
  computed: {
    ...mapWritableState(useUserStore, ['myTeam', 'isLogin', 'coach', 'showLoadingU']),
    ...mapState(usePlayerStore, ['showLoadingP', 'showLoadingMatch'])
  },
  created() {
    if (localStorage.access_token) {
      this.coach = localStorage.name
      this.isLogin = true
    } else {
      this.isLogin = false
      this.hasTeam = false
    }
  }
}
</script>

<template>

<PreloaderMatch v-if="showLoadingMatch"/>
<Preloader v-if="showLoadingP"/>
<Preloader v-if="showLoadingU"/>
<Navbar v-if="isLogin"/>
<Sidebar v-if="isLogin"/>

<RouterView />
</template>

<style>


</style>
