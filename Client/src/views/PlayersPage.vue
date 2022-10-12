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
    <div class="row list text-light">
        <div class="mb-4">
            <h1>Your Player</h1>
        </div>
        <PlayerCard class="pCard" @click="playerDetailHandler(player.id)" v-for="(player, idx) in myPlayers" :key="idx" :player="player" />

    </div>
</div>
</template>

<style scoped>
.list {
    margin-left: 20%;
}



</style>
