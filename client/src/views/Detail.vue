<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  data() {
    return {
      BidderId: localStorage.id,
    };
  },
  computed: {
    ...mapState(useAppStore, ["product", "transaction_token"]),
  },
  methods: {
    ...mapActions(useAppStore, [
      "fetchOneProduct",
      "startBidding",
      "mailer",
      "midtrans",
    ]),
    handleBid(id) {
      this.startBidding(id);
      this.mailer();
    },
    async handlePay(price) {
      await this.midtrans(price);
      window.snap.pay(this.transaction_token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
      });
    },
  },
  watch: {
    "$route.params": {
      handler(params) {
        const id = params.id;
        this.fetchOneProduct(id);
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="card mb-1">
          <div class="row">
            <div class="col-md-6">
              <img :src="product.imgUrl" class="card-img-top" alt="..." />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="card-body">
                <div class="col-12 col-md-6 offset-md-3">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <div class="card-body">
                    <p class="card-text">Type: {{ product.description }}</p>
                    <p class="card-text">Highest Price: {{ product.price }}</p>
                    <p class="card-text">
                      Last Bidder:
                      {{
                        product.BidderProduct
                          ? product.BidderProduct.username
                          : ""
                      }}
                    </p>
                    <div class="d-flex justify-content-evenly">
                      <div v-if="product.status == 'open'">
                        <button
                          type="button"
                          class="btn btn-outline-success"
                          style="
                            --bs-btn-padding-y: 0.25rem;
                            --bs-btn-padding-x: 0.5rem;
                            --bs-btn-font-size: 0.75rem;
                          "
                          @click.prevent="handleBid(product.id)"
                        >
                          BID NOW!
                        </button>
                      </div>
                      <div v-if="product.status == 'close'">
                        <div v-show="product.BidderProduct.id == BidderId">
                          <button
                            type="button"
                            class="btn btn-outline-success"
                            style="
                              --bs-btn-padding-y: 0.25rem;
                              --bs-btn-padding-x: 0.5rem;
                              --bs-btn-font-size: 0.75rem;
                            "
                            @click.prevent="handlePay(product.price)"
                          >
                            PAY!
                          </button>
                        </div>
                        <div v-show="product.BidderProduct.id != BidderId">
                          <button
                            type="button"
                            class="btn btn-outline-success disabled"
                            style="
                              --bs-btn-padding-y: 0.25rem;
                              --bs-btn-padding-x: 0.5rem;
                              --bs-btn-font-size: 0.75rem;
                            "
                          >
                            PAY!
                          </button>
                        </div>
                      </div>
                      <RouterLink
                        type="button"
                        class="btn btn-success"
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                        to="/mylist"
                      >
                        Back
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
