<script>
import {
    mapActions,
    mapState,
    mapWritableState
} from 'pinia';
import PlayerCard from '../components/PlayerCard.vue'
import {
    usePlayerStore
} from '../stores/player';
export default {
    components: {
        PlayerCard
    },
    methods: {
        ...mapActions(usePlayerStore, ['fetchPlayerStore', 'buyPlayer', 'fetchAllPlayers']),
        nextPage() {
            this.page++
            this.fetchPlayerStore()
        },
        previousPage() {
            this.page--
            this.fetchPlayerStore()
        }
    },
    computed: {
        ...mapState(usePlayerStore, ['players', 'totalPages']),
        ...mapWritableState(usePlayerStore, ['page', 'playerSearch']),
        searchName() {
            this.fetchPlayerStore()
        }
    },
    created() {
        this.fetchPlayerStore()
        this.fetchAllPlayers()
    }
}
</script>
<template>
<div id="store" class="d-flex justify-content-center align-items-center">
    <div id="box-store" class="text-bg-light p-4 row border border-3 mt-lg-5">
        <h1>Store</h1>
        <div class="d-flex justify-content-between mx-1 my-4 ">
            <div class="input-group mb-3">
                <input v-model="playerSearch" type="text" class="form-control" placeholder="Player's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button @click="searchName" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            <div style="width:15%;">
                <button class="mx-3 btn btn-primary" v-if="page != 0" @click="previousPage">PREVIOUS</button>
            </div>
            <ul class="list-group list-group-horizontal pageButton">
                <div v-for="(curPage, idx) in totalPages">
                    <li class="list-group-item active" v-if="idx == page">{{idx+1}}</li>
                    <li class="list-group-item" v-else>{{idx+1}}</li>
                </div>
            </ul>
            <div style="width:10%;">
                <button class="mx-3 btn btn-warning" @click="nextPage" v-if="page < totalPages-1">NEXT</button>
            </div>
        </div>
        <PlayerCard @buttonAction="buyPlayer" :player="player" v-for="(player, idx) in players" buttonType="buy" />
    </div>
</div>
</template>

<style scoped>
#store {
    height: 100%;
}

#box-store {
    width: 72%;
    border-radius: 1%;
    height: 85%;
    margin-top: -3%;
    margin-left: 17%;
    box-shadow: 5px 5px 8px 5px black;
}

p {
    font-size: 25px;
}
</style>
