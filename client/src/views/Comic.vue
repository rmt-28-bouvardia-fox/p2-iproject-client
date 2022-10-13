<script>
import ComicCards from '../components/ComicCards.vue'
import {mapActions, mapWritableState} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default {
    components :{
        ComicCards
    },
    data(){
        return {
            inputSearch : ''
        }
    },
    methods : {
        ...mapActions(useCounterStore, ['renderComics']),
        paginationPlus(){
            this.page++
            this.renderComics(this.inputSearch)
        },
        paginationMin(){
            this.page--
            this.renderComics(this.inputSearch)
        },
        search(){
            this.renderComics(this.inputSearch)
        }
    },
    computed : {
        ...mapWritableState(useCounterStore, ['comics','page'])
    },
    created(){
        this.renderComics()
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="container mt-5 text-center">
            <h1>Here are some marvel comics for you</h1>
            <div class="input-group mt-5">
                <input v-model="inputSearch" type="search" class="form-control rounded" placeholder="Search comic name" aria-label="Search" aria-describedby="search-addon" />
                <button @click="search" type="button" class="btn btn-outline-primary">search</button>
            </div>
            <div class="row mb-5">
                <div class="container mx-auto mt-3 ">
                    <div class="row mt-5 ms-2">
                        <ComicCards v-for="comic in comics" :key="comic.id" :comic="comic" />
                    </div>
                    <div class="d-flex mt-3 justify-content-center text-center">
                        <ul class="pagination" v-if="comics.length > 0">
                            <li class="page-item"><a @click.prevent="paginationMin" class="page-link" href="#" v-if="page > 1">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">{{page}}</a></li>
                            <li class="page-item"><a @click.prevent="paginationPlus" class="page-link" href="#" v-if="comics.length / 9 >= 1">Next</a></li>
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
    
</style>