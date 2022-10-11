<script>
import { mapActions, mapState } from 'pinia';
import { usePlayerStore } from '../stores/player';
import { useUserStore } from '../stores/user';

export default {
  computed: {
        ...mapState(useUserStore, ['coach', 'isLogin', 'myTeam'])
    },
    methods: {
        ...mapActions(useUserStore, ['fetchTeam'])
    },
    async created() {
        await this.fetchTeam()
    }
}
</script>
<template>
<nav v-if="isLogin" class="sidebar mt-5" id="sidebar-menu" style="">
    <div class="position-sticky">
        <div class="d-flex justify-content-center">
            <img :src="myTeam.logo" width="100" alt="">
        </div>
        <div class="">
            <h2 class="m-4" id="nav-dashboard">{{myTeam.name}}</h2>
        </div>
        <div class="">
            <h4 class="mx-4 mt-5" id="nav-movie">Coach: {{coach}}</h4>
        </div>
        <ul class="nav flex-column mx-2" style="margin-top: 18%;">
            <li class="nav-item">
                <RouterLink class="nav-link active fw-bold" to="/profile" id="nav-dashboard">Your Team</RouterLink>
            </li>
            <li class="nav-item">
                <a class="nav-link active fw-bold" href="" id="nav-dashboard">Play</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active fw-bold" href="" id="nav-dashboard">Recruit</a>
            </li>
        </ul>
    </div>
</nav>
</template>
<style scoped>
#sidebar-menu {
    background-color: #150050;
    box-shadow: 2px 2px 5px black;
    color: white;
    width: 18%;
}

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar .nav-link {
    font-size: 130%;
    font-weight: 500;
    color: #333;
}

.sidebar .nav-link.active {
    color: white;
}

.sidebar-heading {
    font-size: 0.75rem;
}
</style>