<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    methods: {
        ...mapActions(useUserStore, ['fetchTeam'])
    },
    computed: {
        ...mapState(useUserStore, ['myTeam']),
        totalPlayers() {
            return this.myTeam.Players.length
        }
    },
    created() {
        this.fetchTeam()
    }
}
</script>
<template>
<div id="profil" class="d-flex justify-content-center align-items-center">
    <div id="box-profile" class="text-bg-light p-4 row border border-3 mt-lg-5">
        <div class="col-8 mx-4 mt-4" style="">
            <p><b>Club Name:</b> {{myTeam.name}}</p>
            <p><b>Total Players:</b> {{totalPlayers}} players</p>
            <p><b>Play:</b> {{myTeam.plays}}</p>
            <p><b>Win:</b> {{myTeam.wins}}</p>
            <p><b>Money:</b> $ {{myTeam.money}}</p>
            <p><b>Points:</b> {{myTeam.points}}</p>
        </div>
        <div class="col-3 d-flex justify-content-end align-items-start" style="margin-top: 3%; margin-left: -5%;">
            <img :src="myTeam.logo" width="200" alt="">
        </div>
        <div>
            <RouterLink to="/myPlayers" class="btn btn-danger mx-3" style="width: 14%;">Players</RouterLink>
        </div>
    </div>
</div>


</template>
<style scoped>
#profil{
    height: 90vh;
}

#box-profile{
    width: 50%;
    border-radius: 5%;
    margin-top: -3%;
    box-shadow: 5px 5px 8px 5px black;
}
p{
    font-size: 25px;
}
</style>