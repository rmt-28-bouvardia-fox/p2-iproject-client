<script>
export default {
    props: ['color', 'buttonType', 'player'],
    emits: ['buttonAction'],
    methods: {
        buttonHandler() {
            this.$emit('buttonAction', this.player.id)
        }
    },
    computed: {
        playerPrice() {
            let price = 500
            if (this.player.rating >= 8) {
                price = 3000
            } else if (this.player.rating >= 7.5) {
                price = 2500
            } else if (this.player.rating >= 7) {
                price = 2000
            } else if (this.player.rating >= 6.5) {
                price = 1500
            } else if (this.player.rating >= 6) {
                price = 1000
            } 
            return `$ ${price}`
        }
    }
}

</script>
<template>
<div class="card col-4 mx-2 player">
    <img width="30" height="220" :src="player.photo" class="card-img-top" alt="...">
    <div class="card-body text-bg-info infoP">
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Name: </b></p>
            <p class="card-text">{{player.name}}</p>
        </div>
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Position: </b></p>
            <p class="card-text">{{player.position}}</p>
        </div>
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Rating: </b></p>
            <p class="card-text">{{player.rating}}</p>
        </div>
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Price: </b></p>
            <p class="card-text">{{playerPrice}}</p>
        </div>
        <button @click="buttonHandler" v-if="buttonType == 'buy'" class="btn btn-success">Buy</button>
    </div>
</div>
</template>
<style scoped>
.infoP {
    margin-left: -7%;
    width: 114%;
    margin-bottom: -5%;
    border-radius: 5%;
    border: 5px solid black;
}

.player:hover{
    cursor: pointer;
    opacity: 200%;
}

.player{
    width: 15rem;
    box-shadow: 4px 6px 6px 6px black;
    opacity: 80%;
    margin-bottom: 4%;
}

p {
    font-size: 17px;
    margin-bottom: 5px;
}
</style>
