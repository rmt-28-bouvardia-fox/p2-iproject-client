<script>
import {
    mapActions,
    mapState
} from 'pinia';
import {
    usePlayerStore
} from '../stores/player';

export default {
    methods: {
        ...mapActions(usePlayerStore, ['fetchOpponents', 'playGame'])
    },
    created() {
        this.fetchOpponents()
    },
    computed: {
        ...mapState(usePlayerStore, ['opponents'])
    }
}
</script>
<template>
<div id="match" class="d-flex flex-column mb-3 justify-content-center align-items-center">
    <div class="d-flex justify-content-end photo-match">
        <img src="https://i.ytimg.com/vi/sZmThNs2jkw/maxresdefault.jpg" alt="" width="800">
    </div>
    <div id="text-match" class="">
        <h1>Choose your Opponent</h1>
    </div>
    <div id="box-match" class="p-4 row border border-3 mt-lg-5">
        <div class="d-flex row list text-dark">
            <div @click="playGame(opp._id)" class="team-card card col-4 mx-3 my-4" style="width: 18rem;" v-for="(opp, idx) in opponents">
                <img :src="opp.logo" width="90" class="card-img-top" :alt="opp.name" >
                <div style="background-color: greenyellow; border: 4px solid lightseagreen;" class="clubName card-body text-center">
                    <p class="card-text">{{opp.name}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.team-card:hover{
    cursor: pointer;
    opacity: 100%;
}

.photo-match{
    margin-left: 300px;
}
.team-card{
    opacity: 80%;
}

#text-match{
    margin-top: -100px;
    font: small-caps bold 40px sans-serif;
    width: 600px;
    margin-left: 290px;
    padding-left: 25px;
    color: white;
    background-color: rgb(188, 0, 0);
}
h1{
    font-family:  "Lucida Console", "Courier New", monospace;
    font-size: 60px;
}
#match {
    height: 100%;
}

#box-match {
    width: 70%;
    border-radius: 1%;
    height: 85%;
    margin-top: -3%;
    margin-left: 17%;
    box-shadow: 5px 5px 8px 5px black;
    background-color: rgb(90, 99, 255)
}

p {
    font-size: 25px;
}
</style>