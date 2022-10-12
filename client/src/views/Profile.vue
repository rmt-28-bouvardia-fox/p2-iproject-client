<script>
import { mapActions, mapWritableState } from 'pinia';
import { useClientStore } from '../stores/client';


    export default {
        data(){
            return {
                phoneNumber : '',
                address : ''
            }
        },
        computed : {
            ...mapWritableState(useClientStore,['user'])
        },
        methods :{
            ...mapActions(useClientStore,['renderProfile'])
        },
        async created(){
            await this.renderProfile()
            this.phoneNumber = this.user.phoneNumber ? this.user.phoneNumber : 'empty',
            this.address = this.user.address ? this.user.address : 'empty'
        }
    }
</script>

<template>
    <div class="container">
    <div class="main-body">
    
    <div class="row gutters-sm">
            <h1>Profile</h1>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{ user.firstName}} {{user.lastName}} 
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{user.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{phoneNumber}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        {{address}}
                    </div>
                  </div>
                 
                </div>
              </div>

              



            </div>
        </div>
        <div class="col-md-8">
            <h1>Orders</h1>
            <div class="card mb-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Comic Title</td>
                            <td>Comic Price</td>
                            <td>Comic Image</td>
                            <td>Payment Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" (el, i) in user.Orders" :key="el.id">
                            <td>{{ i + 1}}</td>
                            <td>{{el.comicName}}</td>
                            <td>{{el.price}}</td>
                            <td><img :src="el.comicImageUrl" style="height:80px;width:80px" alt=""></td>
                            <td>{{el.status}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
</template>


<style scoped>
    body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>