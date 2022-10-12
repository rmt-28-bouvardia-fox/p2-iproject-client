<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  data() {
    return {
      bidder: []
    }
  },
  computed: {
    ...mapState(useAppStore, ["bidLists"]),
  },
  created() {
    this.fetchMyBid();
  },
  methods: {
    ...mapActions(useAppStore, ["fetchMyBid", "deleteBidList", "fetchOneProduct"]),
    handleRemove(id) {
      this.deleteBidList(id)
    },
    handleDetail(id) {
      this.fetchOneProduct(id)
      this.$router.push(`/detail/${id}`)
    }
  },
};
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center">MY BID LIST</h1>
    <div class="row mt-3">
      <!-- Tutorial Card -->
      <div
        class="col-12 col-md-4 p-2"
        v-for="(bidList, idx) in bidLists"
        :key="idx"
      >
        <div class="card mb-3" width="540">
          <div class="row g-0">
            <div class="col-md-5">
              <img
                :src="bidList.Product.imgUrl"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">{{ bidList.Product.name }}</h5>
                <p class="card-text">Type: {{ bidList.Product.description }}</p>
                <p class="card-text">Price: {{ bidList.Product.price }}/kg</p>
                <p class="card-text">
                  Farmer: {{ bidList.Product.OwnerProduct.username }}
                </p>
                <div class="d-flex justify-content-evenly">
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-success"
                      style="
                        --bs-btn-padding-y: 0.25rem;
                        --bs-btn-padding-x: 0.5rem;
                        --bs-btn-font-size: 0.75rem;
                      "
                      @click.prevent="handleDetail(bidList.Product.id)"
                    >
                      See Detail
                    </button>
                  </div>
                  <button
                    type="button"
                    class="btn btn-danger"
                    style="
                      --bs-btn-padding-y: 0.25rem;
                      --bs-btn-padding-x: 0.5rem;
                      --bs-btn-font-size: 0.75rem;
                    "
                    @click.prevent="handleRemove(bidList.id)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
