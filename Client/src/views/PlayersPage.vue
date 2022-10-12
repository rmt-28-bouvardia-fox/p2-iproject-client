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
    <div class="d-flex row justify-content-start list text-light">
        <div class="mb-4">
            <h1>Your Player</h1>
        </div>
        <div class="d-flex justify-content-end" style="margin-left: -6%;">
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
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
