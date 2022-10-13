<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  computed: {
    ...mapState(useAppStore, ["products"]),
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    ...mapActions(useAppStore, ["fetchProduct", "addBidList"]),
    handleAdd(id) {
      this.addBidList(id)
    }
  },
};
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center">AUCTION LIST</h1>
    <div class="row mt-3">
      <!-- Tutorial Card -->
      <div
        class="col-12 col-md-4 p-2"
        v-for="(product, idx) in products"
        :key="idx"
      >
        <div class="card mb-3" width="540">
          <div class="row g-0">
            <div class="col-md-5">
              <img
                :src="product.imgUrl"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">Type: {{ product.description }}</p>
                <p class="card-text">Price: {{ product.price }}/kg</p>
                <p class="card-text">
                  Farmer: {{ product.OwnerProduct.username }}
                </p>
                <button
                  type="button"
                  class="btn btn-success"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                  @click.prevent="handleAdd(product.id)"
                >
                  Pick Me!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
