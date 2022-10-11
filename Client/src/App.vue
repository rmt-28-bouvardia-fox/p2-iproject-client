<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import { usePlayerStore } from './stores/player';
import {useUserStore} from './stores/user'


export default {
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapWritableState(useUserStore, ['myTeam', 'isLogin', 'coach'])
  },
  created() {
    if ( localStorage.access_token) {
      this.coach = localStorage.name
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<template>
<Navbar v-if="isLogin"/>
<Sidebar v-if="isLogin"/>

<RouterView />
</template>

<style>


</style>
