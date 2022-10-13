<script>
import { mapActions, mapState } from 'pinia';
import PlayerCard from '../components/PlayerCard.vue'
import { usePlayerStore } from '../stores/player';
export default {
    components: {
        PlayerCard
    },
    computed: {
        ...mapState(usePlayerStore, ['myPlayers', 'player'])  
    },
    methods: {
        ...mapActions(usePlayerStore, ['fetchMyPlayers', 'findOnePlayer']),
        playerDetailHandler(id) {
            this.findOnePlayer(id)
        }
    },
    created() {
        this.fetchMyPlayers()
    }
}
</script>
<template>
<div style="height: 150vh;">
    <div class="row list text-dark" style="margin-top:60px">
        <div class="mb-4">
            <h1>My Player</h1>
        </div>
        <PlayerCard class="pCard" @click="playerDetailHandler(player.id)" v-for="(player, idx) in myPlayers" :key="idx" :player="player" />

    </div>
</div>
</template>

<style scoped>
.list {
    margin-left: 20%;
}
h1{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 70px;
}



</style>
