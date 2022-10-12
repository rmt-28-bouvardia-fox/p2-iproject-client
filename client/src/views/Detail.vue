<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
  computed: {
    ...mapState(useAppStore, ["product"])
  },
  methods: {
    ...mapActions(useAppStore, ["fetchOneProduct"])
  },
  watch: {
    '$route.params' : {
      handler(params) {
        const id = params.id
        this.fetchOneProduct(id)
      },
      immediate: true
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="card mb-1">
          <div class="row">
            <div class="col-md-6">
              <img
                :src="product.imgUrl"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <div class="card-body">
                <div class="col-12 col-md-6 offset-md-3">
                  <h5 class="card-title">{{product.name}}</h5>
                  <div class="card-body">
                    <p class="card-text">Type: {{product.description}}</p>
                    <p class="card-text">Highest Price: {{product.price}}</p>
                    <p class="card-text">Last Bidder: {{product.BidderProduct? product.BidderProduct.username : ''}}</p>
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
                        >
                          BID NOW!
                        </button>
                      </div>
                      <button
                        type="button"
                        class="btn btn-success"
                        style="
                          --bs-btn-padding-y: 0.25rem;
                          --bs-btn-padding-x: 0.5rem;
                          --bs-btn-font-size: 0.75rem;
                        "
                      >
                        Back
                      </button>
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
