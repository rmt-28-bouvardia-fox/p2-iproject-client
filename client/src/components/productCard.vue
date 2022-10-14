<script>
export default{
    props: ['product']
}
</script>


<template>
    <div class="col-12 col-md-4">
          <div class="card mb-3">
            <img :src="product.imageUrl" class="card-img-top" />
            <div class="card-body card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <p class="card-text">Price per Week : {{product.perWeek}}</p>
              <button class="btn btn-link"><RouterLink to="">Details >>></RouterLink></button>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
</template>