<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import { usePlayerStore } from './stores/player';
import { useUserStore } from './stores/user'
import Preloader from './components/Preloader.vue'


export default {
  components: {
    Navbar,
    Sidebar,
    Preloader
  },
  computed: {
    ...mapWritableState(useUserStore, ['myTeam', 'isLogin', 'coach', 'showLoadingU']),
    ...mapState(usePlayerStore, ['showLoadingP'])
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
<Preloader v-if="showLoadingP"/>
<Preloader v-if="showLoadingU"/>
<Navbar v-if="isLogin"/>
<Sidebar v-if="isLogin"/>

<RouterView />
</template>

<style>


</style>
