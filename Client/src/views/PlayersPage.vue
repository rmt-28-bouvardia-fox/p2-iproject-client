<script>
import { mapActions, mapState } from 'pinia';
import PlayerCard from '../components/PlayerCard.vue'
import { usePlayerStore } from '../stores/player';
export default {
    components: {
        PlayerCard
    },
    data() {
        return {
            players: ['tes', 'tes', 'tes']
        }
    },
    computed: {
      ...mapState(usePlayerStore, ['myPlayers'])  
    },
    methods: {
        ...mapActions(usePlayerStore, ['fetchMyPlayers']),
        playerDetailHandler() {
            this.$router.push('/playerDetail/1')
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
        <PlayerCard class="pCard" @click="playerDetailHandler" v-for="(player, idx) in myPlayers" :key="idx" :player="player.Player" />

    </div>
</div>
</template>

<style scoped>
.list {
    margin-left: 20%;
}



</style>
