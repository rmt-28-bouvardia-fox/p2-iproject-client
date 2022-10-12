<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    data(){
        return {
            imgUrl : '',
            imgUrl2 : '',
            imgUrl3 : ''
        }
    },
    computed: {
        ...mapState(useCounterStore, ["characters"])
    },
    methods: {
        ...mapActions(useCounterStore, ["renderHome"])
    },
    async created() {
        await this.renderHome();
        this.imgUrl = this.characters[0].thumbnail.path + '.' + this.characters[0].thumbnail.extension
        this.imgUrl2 = this.characters[1].thumbnail.path + '.' + this.characters[1].thumbnail.extension
        this.imgUrl3 = this.characters[2].thumbnail.path + '.' + this.characters[2].thumbnail.extension
    },
}
</script>

<template>
    <div class="container text-center mt-5">
        <h1>Welcome to Home of marvel</h1>
    </div>
    <div class="container mt-3 justify-content-center">
        <div class="d-flex justify-content-center">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img :src="imgUrl" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img :src="imgUrl2" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img :src="imgUrl3" class="d-block w-100" alt="...">
        </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        
    </div>
</template>