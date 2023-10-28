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
      window.snap.pay(this.transactionToken, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
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
  <!-- <div class="col-12">
    <div class="justify-content-center d-flex row p-5">
      <div
        class="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center"
      >
        <h1 class="display-2 text-light">Your Order</h1>
      </div>

      <table class="table" id="table-genre">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="table-genre"> -->
  <!-- <RowTable
              table="genres"
              :genres="genres"
              @deleteGenre="deleteGenre"
              @editGenre="editGenre"
            /> -->
  <!-- <tr>
            <td scope="row">index + 1</td>
            <td class="fw-bold">title game</td>
            <td class="fw-bold">
              <img
                src="https://gamersgatep.imgix.net/b/2/f/b23b4c92043dae96672ae43036ea15d5bea54f2b.jpg?auto=&w="
                alt=""
              />
            </td>
            <td class="fw-bold">Rp 100000</td>
            <td class="fw-bold">Pending</td>
            <td class="fw-bold"><a href="">Buy</a></td> -->
  <!-- <td>
      <a
        href=""
        class="ms-3 btn btn-info"
        v-on:click.prevent="editGenreHandler(genre.name, genre.id)"
        >EDIT</a
      >
    </td> -->
  <!-- <td>
      <a
        href=""
        class="ms-3 btn btn-danger"
        v-on:click.prevent="deleteGenreHandler(genre.id, genre.name)"
        >DELETE
      </a>
    </td> -->
  <!-- </tr>
        </tbody>
      </table>
    </div>
  </div> -->
</template>

<style>
thead {
  background-color: rgba(201, 96, 5, 0.827);
}
tbody {
  background-color: rgb(203, 199, 197);
}
</style>
