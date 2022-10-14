<script>
import { mapActions, mapWritableState } from 'pinia';
import productCard from '../components/productCard.vue'
import { useCounterStore } from '../stores/counter';
import navbar from '../components/navbar.vue'
export default{
    components:{
        productCard,
        navbar
    },
    methods:{
        ...mapActions(useCounterStore, ['getVehicle', 'nextPage', 'previousPage', 'loginValidation'])
    },
    computed:{
        ...mapWritableState(useCounterStore, ['products', 'page'])
    },
    created(){
        this.getVehicle();
        this.loginValidation()
    }
}
</script>

<template>
    <div class="container">
        <navbar />
      <h1>Content</h1>
      <div class="row justify-content-start">
        <productCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <div> 
        <RouterLink v-if="page !== 1" class="button btn-light" @click.prevent="previousPage" to="/" > Prev </RouterLink>
        <RouterLink class="button btn-light" @click.prevent="nextPage" to="/" > Next Page >></RouterLink> 
      </div>
    </div>
</template>