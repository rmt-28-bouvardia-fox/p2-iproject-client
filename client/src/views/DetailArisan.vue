<template>
  <NavigationBar />
  <section>
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Your Location</h1>
        <div id="map"></div>
      </div>
    </div>
    <div class="align-items-baseline">
      <div class="row-md-6">
        <div class="h-100 p-5 text-white bg-gradient rounded-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(log, index) in logTransaction" :key="index">
                <tr v-if="log.status == 'Success'">
                  <td>{{ index + 1 }}</td>
                  <td>{{ formattedDate(log.createdAt) }}</td>
                  <td>{{ log.status }}</td>
                  <td>
                    <p v-if="log.status == 'Success'">paid off</p>
                    <button
                        v-if="log.status == 'Pending'"
                      @click.prevent="payment()"
                      class="btn btn-outline-primary">
                      Pay
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useArisanStore } from "../stores/arisan";
import NavigationBar from "../components/navigation-bar.vue";
import moment from "moment";

export default {
  methods: {
    ...mapActions(useArisanStore, ["midTrans", "payTrans", "fetchLogTrans"]),
    async payment(id) {
      this.payTrans(id);
      await this.midTrans();
      console.log(this.ott);
      window.snap.pay(this.ott, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
      });
    },
    formattedDate(date) {
      const time = moment(date).format("dddd, MMMM Do YYYY");
      return time;
    },
  },
  computed: {
    ...mapState(useArisanStore, ["ott", "logTransaction"]),
  },
  components: { NavigationBar },
  created() {
    this.fetchLogTrans();
  },
};
</script>

<style>
#map {
  height: 180px;
}
</style>
