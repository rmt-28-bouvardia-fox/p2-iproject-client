<script>
import { mapActions, mapState } from 'pinia';
import { usePlayerStore } from '../stores/player';

export default {
    methods: {
        ...mapActions(usePlayerStore, ['randomBuy'])
    },
    computed: {
        
    }
}
</script>
<template>
<div id="gatcha" class="d-flex justify-content-center align-items-center">
    <div id="box-gatcha" class="flex-column p-4 row border border-3 mt-lg-3">
        <div class="d-flex justify-content-center align-items-start" style="margin-top: -2%; margin-right: 20%;">
            <img src="../assets/mbappe.png"  width="200" alt="">
        </div>
        <div class="d-flex justify-content-center">
            <div id="text-gatcha"  class="rounded-pill border border-3 text-bg-success text-center">
                <h4>Get random player <br> Just pay $ 2000</h4>
            </div>
        </div>
        <div class="d-flex mt-3 justify-content-center">
            <button @click="randomBuy" style="width: 17%;" class="btn shadow shadow-sm btn-primary">Gatcha</button>
        </div>
    </div>
</div>


</template>
<style scoped>
#gatcha{
    height: 90vh;
   
}

#text-gatcha{
    width: 70%;
}

#box-gatcha{
    background-color: sandybrown;
    width: 120vh;
    border-radius: 5%;
    height: 480px;
    margin-left: 10%;
    box-shadow: 5px 5px 8px 2px black;
}

p{
    font-size: 25px;
}
</style>