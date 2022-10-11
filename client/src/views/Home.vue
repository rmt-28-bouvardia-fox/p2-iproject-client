<script>
import ComicCards from '../components/ComicCards.vue'
import {mapActions, mapState} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default {
    components :{
        ComicCards
    },
    methods : {
        ...mapActions(useCounterStore, ['renderHome'])
    },
    computed : {
        ...mapState(useCounterStore, ['comics'])
    },
    created(){
        this.renderHome()
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="container mt-5 text-center">
            <h1>Welcome to home of marvel Comic</h1>
            <div class="container mx-auto mt-5 ">
                <div class="row mt-5 ms-2">
                    <ComicCards v-for="comic in comics" :key="comic.id" :comic="comic" />
                </div>
            </div>
        
        </div>
    </div>
    
</template>

<style>
    
</style>