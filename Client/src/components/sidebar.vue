<script>
import {
    mapActions,
    mapState
} from 'pinia';
import {
    usePlayerStore
} from '../stores/player';
import {
    useUserStore
} from '../stores/user';

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
        <div class="d-flex justify-content-center">
            <h2 class="m-4" id="nav-dashboard">{{myTeam.name}}</h2>
        </div>
        <div>
            <h4 class="mx-4 mt-3" id="nav-movie">Coach: {{coach}}</h4>
        </div>
        <ul id="sidebar-link" class="nav flex-column mx-2" style="margin-top: 18%;">
            <li class="nav-item">
                <RouterLink class="nav-link active fw-bold" to="/profile" id="nav-dashboard">Your Team</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link active fw-bold" to="/match" id="nav-dashboard">Play</RouterLink>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Recruit a Player
                </a>
                <ul class="dropdown-menu mx-3" style="font-size: 19px; width: 85%;">
                    <li><RouterLink class="dropdown-item" to="/store" id="nav-dashboard">Buy a Player</RouterLink></li>
                    <li><RouterLink class="dropdown-item" to="/randomBuy">Random player</RouterLink></li>
                </ul>
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
    width: 16%;
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
    font-size: 120%;
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
