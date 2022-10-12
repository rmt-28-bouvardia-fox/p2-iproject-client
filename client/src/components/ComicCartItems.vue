<script>
export default {
    props : ['item'],
    computed : {
        shownPrice(){
            return this.item.price.toLocaleString("id-Id", {style:"currency", currency:"IDR"})
        }
    }
}
</script>

<template>
    <div class="row main align-items-center" >
        <div class="col-2"><img class="img-fluid" :src="item.comicImageUrl"></div>
            <div class="col">
                <div>{{item.comicName}}</div>
            </div>
            <div class="col">
                <div>{{item.status}}</div>
            </div>
        <div class="col">{{shownPrice}}</div>
    </div>    
</template>