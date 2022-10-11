<script>
import { mapActions, mapState } from 'pinia';
import PlayerCard from '../components/PlayerCard.vue'
import { usePlayerStore } from '../stores/player';
export default {
    components: {
        PlayerCard
    },
    methods: {
        ...mapActions(usePlayerStore, ['fetchPlayerStore'])
    },
    computed: {
      ...mapState(usePlayerStore, ['players'])  
    },
    created() {
        this.fetchPlayerStore()
    }
}
</script>
<template>
<div id="store" class="d-flex justify-content-center align-items-center">
    <div id="box-store" class="text-bg-light p-4 row border border-3 mt-lg-5">
        <h1>Store</h1>
        <PlayerCard :player="player" v-for="(player, idx) in players" buttonType="buy"/>
    </div>
</div>


</template>
<style scoped>
#store{
    height: 100%;
}

#box-store{
    width: 72%;
    border-radius: 1%;
    height: 85%;
    margin-top: -3%;
    margin-left: 17%;
    box-shadow: 5px 5px 8px 5px black;
}
p{
    font-size: 25px;
}
</style>