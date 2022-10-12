<script>
import { mapActions, mapState } from 'pinia';
import { useClientStore } from '../stores/client';
import { useCounterStore } from '../stores/counter';

  export default {
    data(){
      return {
        imgUrl : this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension,
        price : this.comic.prices[0].price > 0 ?  this.comic.prices[0].price : 5
      }
    },
    props : ['comic'],
    computed : {
      ...mapState(useClientStore,['isLoggedIn']),
      shownPrice(){
        let displayPrice = +this.price * 15500
        return displayPrice.toLocaleString("id-Id", {style:"currency", currency:"IDR"})
      }
    },
    methods : {
      ...mapActions(useCounterStore,['renderComic', 'addToCart']),
      comicDetail(comicId){
        this.renderComic(comicId)
        this.$router.push(`/comics/${comicId}`)
      },
      addToCartHandler(){
        this.isLoggedIn == true ? this.addToCart({price : this.price, comicId : this.comic.id, comicName : this.comic.title, comicImageUrl : this.imgUrl}) : this.$router.push('/login')
      }
    }
  }
</script>

<template>
    <!--Card-->
    <div class="col-md-4" >
        <div class="card" style="width: 18rem;">
            <img :src="imgUrl" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{comic.title}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Price : {{ shownPrice }}</h6>
              <a @click.prevent="comicDetail(comic.id)" href="#" class="btn btn-primary mr-2 ms-3 me-3"><i class="fas fa-link"></i> See details</a>
              <a @click.prevent="addToCartHandler" href="#" class="btn btn-primary"><i class="fab fa-github"></i> Add to cart</a>
            </div>
        </div>
    </div>
</template>


<style scoped>

:root {
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}


.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

</style>