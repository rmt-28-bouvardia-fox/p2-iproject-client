<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/user";

export default {
  created() {
    this.checkout(this.$route.params.wishlistId);
  },
  computed: {
    ...mapState(useAppStore, [
      "gameIdr",
      "gameTitle",
      "gameUrl",
      "transactionToken",
    ]),
  },
  methods: {
    ...mapActions(useAppStore, ["checkout", "payment"]),
    async submitBuy() {
      await this.payment(this.gameIdr);
      console.log(this.transactionToken, "masuk ke cgheckut");
      window.snap.pay(this.transactionToken, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="card mx-auto col-md-3 col-10 mt-5 pt-4">
      <div class="d-flex sale"></div>
      <img class="mx-auto img-thumbnail" :src="gameUrl" />
      <div class="card-body text-center mx-auto">
        <h5 class="card-title">{{ gameTitle }}</h5>
        <p class="card-text">Rp {{ gameIdr }}</p>
        <a href="" class="btn btn-info" @click.prevent="submitBuy">Buy</a>
      </div>
    </div>
  </div>
</template>
