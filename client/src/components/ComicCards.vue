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
            <div class="col-12">
              <img :src="imgUrl" class="card-img-top" style="object-fit:cover; width:25mh;height:25vh" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{comic.title}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Price : {{ shownPrice }}</h6>
              <div class="row">
                <div class="col-6">
                  <button style="font-size:10px" @click.prevent="comicDetail(comic.id)" href="#" class="btn btn-primary mr-2 ms-3 me-3"><i class="fas fa-link"></i> See details</button>
                </div>
                <div class="col-6">
                  <button style="font-size:small" @click.prevent="addToCartHandler" href="#" class="btn btn-primary"><i class="fab fa-github"></i> Add to cart</button>
                </div>
              </div>                            
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