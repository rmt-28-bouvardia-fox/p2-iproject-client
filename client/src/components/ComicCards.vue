
<script>
  export default {
    data(){
      return {
        imgUrl : (this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension) == `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg` ? false : this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension
      }
    },
    props : ['comic']
  }
</script>

<template>
    

  
    <!--Card-->
    <div class="col-md-4" v-if="imgUrl != false">
        <div class="card" style="width: 18rem;">
            <img :src="imgUrl" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{comic.title}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary mr-2 ms-3 me-3"><i class="fas fa-link"></i> Visit Site</a>
              <a href="#" class="btn btn-primary"><i class="fab fa-github"></i> Github</a>
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