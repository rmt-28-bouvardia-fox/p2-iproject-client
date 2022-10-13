<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import ComicCartItems from '../components/ComicCartItems.vue';
import { useClientStore } from '../stores/client';


export default {
    data() {
        return {
            totalPrice: 0
        };
    },
    computed: {
        ...mapWritableState(useCounterStore, ["cartItems", "transactionToken"]),
        displayTotalPrice() {
            return this.totalPrice.toLocaleString("id-Id", { style: "currency", currency: "IDR" });
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["renderCart", 'payment', 'editStatus']),
        shownTotalPrice() {
            const prices = this.cartItems.map(el => {
                return el.price;
            });
            this.totalPrice = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 1);
        },
        moveToProfile(){
            this.$router.push('/profile')
        }, 
        async checkout(){
            await this.payment(this.totalPrice)
            const cb = this.moveToProfile
            const cb2 = this.editStatus
            window.snap.pay(this.transactionToken, {
            onSuccess: function(result){
              /* You may add your own implementation here */
                cb2(result.order_id)
                cb()
                Swal.fire('Payment success, you will receive your order in your email soon!!');
            },
            onPending: function(result){
              /* You may add your own implementation here */
                Swal.fire('Payment Unsuccessful');
            },
            onError: function(result){
              /* You may add your own implementation here */
                console.log(result);
            },
            onClose: function(){
            /* You may add your own implementation here */
                Swal.fire(`Uhh Ohh!!, you haven't done your payment, yet`)
            }
        });
        // customer will be redirected after completing payment pop-up
        }
    },
    async created() {
        await this.renderCart();
        this.shownTotalPrice();
    },
    components: { ComicCartItems }
}

</script>



<template>
    <div class="container mt-5">
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Shopping Cart</b></h4></div>
                            
                        </div>
                    </div>    
                    <div class="col align-self-center text-right text-muted">{{cartItems.length}} Items</div>
                    <div class="row border-top border-bottom">
                        <div v-if="cartItems.length == 0">Your cart is empty</div>
                        <ComicCartItems v-for="item in cartItems" :key="item.id" :item="item"/>
                    </div>
                    <div class="back-to-shop"><router-link to="/comics" href="#">&leftarrow;</router-link><span class="text-muted">Back to Home</span></div>
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr>
                    <form>
                        <p>SHIPPING</p>
                        <select><option class="text-muted">Email delivery - free</option></select>
                    </form>
                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">{{displayTotalPrice}}</div>
                    </div>
                    <button @click="checkout" class="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>

    </div>
    
</template>

<style scoped>
body{
    background: #ddd;
    min-height: 100vh;
    vertical-align: middle;
    display: flex;
    font-family: sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
}
.title{
    margin-bottom: 5vh;
}
.card{
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}
@media(max-width:767px){
    .card{
        margin: 3vh auto;
    }
}
.cart{
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}
@media(max-width:767px){
    .cart{
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
}
.summary{
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}
@media(max-width:767px){
    .summary{
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
    }
}
.summary .col-2{
    padding: 0;
}
.summary .col-10
{
    padding: 0;
}.row{
    margin: 0;
}
.title b{
    font-size: 1.5rem;
}
.main{
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}
.col-2, .col{
    padding: 0 1vh;
}
a{
    padding: 0 1vh;
}
.close{
    margin-left: auto;
    font-size: 0.7rem;
}
img{
    width: 3.5rem;
}
.back-to-shop{
    margin-top: 4.5rem;
}
h5{
    margin-top: 4vh;
}
hr{
    margin-top: 1.25rem;
}
form{
    padding: 2vh 0;
}
select{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder
{
      color:transparent;
}
.btn{
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
}
.btn:focus{
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    transition: none; 
}
.btn:hover{
    color: white;
}
a{
    color: black; 
}
a:hover{
    color: black;
    text-decoration: none;
}
 #code{
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253) , rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
</style>