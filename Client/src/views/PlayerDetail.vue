<script>
import { mapActions, mapState } from 'pinia';
import { usePlayerStore } from '../stores/player';
import { useUserStore } from '../stores/user';

export default {
    computed: {
        ...mapState(usePlayerStore, ['player']),
    },
    methods: {
        ...mapActions(usePlayerStore, ['findOnePlayer', 'sellPlayer']),
        ...mapActions(useUserStore, ['fetchTeam']),
        sellPlayerHandler() {
            this.sellPlayer(this.player.id)
            this.fetchTeam()

      }  
    },
    watch: {
        '$route.params': {
            handler(params) {
                const id = params.id
                this.findOnePlayer(id)
            },
            immediate: true
        }
    }
}
</script>
<template>
<div id="profilPlayer" class="d-flex justify-content-center align-items-center">
    <div id="boxPlayer" class="p-4 p-4 row border border-3 mt-4">
        <div class="col-3 d-flex justify-content-end align-items-start" style="width: 50%; margin-left: 30%;">
            <img width="300" :src="player.photo" alt="">
        </div>
        <div class="mt-3" style="margin-left: 50px;">
            <p><b>Name:</b> {{player.name}}</p>
            <p><b>Position:</b> {{player.position}}</p>
            <p><b>Rating:</b> {{player.rating}}</p>
            <p><b>Number:</b> {{player.number}}</p>
        </div>
        <div class="mx-4">
            <button @click="sellPlayerHandler()" class="btn btn-danger mx-4" style="width: 14%;">Sell</button>
        </div>
    </div>
</div>

</template>

<style scoped>

#boxPlayer{
    width: 50%;
    border-radius: 5%;
    height: 85%;
    margin-top: -3%;
    background-color: #5F6F94;
    box-shadow: 2px 2px 8px 2px black;
}
p{
    font-size: 25px;
    margin-bottom: 20px;
    color: white;
}
</style>
