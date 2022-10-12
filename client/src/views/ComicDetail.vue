<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    
    computed : {
        ...mapState(useCounterStore,['comic'])
    },
    methods: {
        ...mapActions(useCounterStore,['renderComic'])
    },
    // beforeCreate(){
    //     this.renderComic(this.$route.params.id)
    // },
    async created(){
        // console.log(this.$route)
        const comicId = this.$route.params.id
        // console.log(comicId)
        await this.renderComic(this.$route.params.id)
        this.imgUrl = this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension
    },
    data(){
        return {
            imgUrl : ''
        }
    },
}
</script>

<template>
    <div class="container mt-5 ">
        <div class="row">
            <div class="container mt-3 mb-3 text-center">
                <h1>{{comic.title}}</h1>
            </div>
            <div class="d-flex text-center p-3">

                <div class="container">
                    <img :src="imgUrl" alt="" style="height:50vh;width:40vh">
                </div>
                
            </div>
            <div class="col border border-2">
                <h3>Description : {{comic.description ? comic.description : comic.title}}</h3>
            </div>
            
        </div>
    </div>
</template>