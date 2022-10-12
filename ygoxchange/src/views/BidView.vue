<script>
import { mapActions, mapState } from "pinia";
import { useBidStore } from "@/stores/bid.js";
import { useUserStore } from "@/stores/user.js";
import CustomButton from "@/components/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      days: [
        "Sunday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      interval: null,
      expired: false,
      timer: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      bidPrice: 0,
      bidded: false,
      owner: false,
      currentUser: null,
    };
  },
  computed: {
    ...mapState(useBidStore, ["bid", "bidPageLoader"]),
  },
  methods: {
    ...mapActions(useBidStore, ["getBid", "submitBid"]),
    ...mapActions(useUserStore, ["getUser"]),
    msToDate(ms) {
      const d = new Date(ms);
      const day = this.days[d.getDay()];
      const date = d.getDate();
      const month = this.months[d.getMonth()];
      const year = d.getFullYear();
      const hour = d.getHours();
      const minute = d.getMinutes();
      return `${day}, ${date} ${month} ${year} ( ${hour}:${minute} )`;
    },
    runTimer() {
      this.interval = setInterval(() => {
        this.timerFunction(this.bid.expiredBy);
      }, 1000);
    },
    timerFunction(expired) {
      let deadline = new Date(expired).getTime();
      let now = new Date().getTime();
      let time = deadline - now;

      let day = Math.floor(time / (1000 * 60 * 60 * 24));
      let hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((time % (1000 * 60)) / 1000);

      this.timer = { day, hour, minute, second };

      if (time < 0) {
        clearInterval(this.interval);
        this.expired = true;
      }
    },
    formatPrice(price) {
      const format = {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      };
      return Intl.NumberFormat("id-ID", format).format(price);
    },
    async submitBidPrice() {
      const bidded = await this.submitBid({
        id: this.$route.params.id,
        price: this.bidPrice,
      });
      if (bidded) {
        this.bidded = true;
      }
    },
  },
  async created() {
    await this.getBid(this.$route.params.id);
    this.currentUser = await this.getUser();
    await this.runTimer();
    if (this.currentUser?.id == this.bid.sellerId) {
      this.owner = true;
    }
    if (this.currentUser?.id == this.bid.buyerId) {
      if (parseInt(this.bid.currentPrice) > this.bid.startPrice) {
        this.bidded = true;
        this.bidPrice = this.bid.currentPrice;
      }
    }
  },
};
</script>

<template>
  <div v-if="!bidPageLoader" class="pb-[10vh] md:flex">
    <div class="md:mr-5 md:w-1/2 flex justify-center">
      <img
        :src="bid.cardDetail.card_images[0].image_url"
        :alt="bid.cardDetail.name"
        class="min-w-[400px] h-[600px]"
      />
    </div>
    <div class="sm:mt-5 md:mt-0 md:w-1/2">
      <div class="text-3xl text-blueTheme font-semibold">
        {{ bid.cardDetail.name }}
      </div>

      <div class="flex font-noto pb-3">
        <div class="w-1/4 font-bold text-blueTheme">Bid Creator</div>
        <div class="w-3/4">
          {{ bid.createdBy }}
        </div>
      </div>

      <div class="flex font-noto pb-3">
        <div class="w-1/4 font-bold text-blueTheme">Posted At</div>
        <div class="w-3/4">{{ msToDate(bid.createdAt) }}</div>
      </div>

      <div class="flex font-noto pb-3">
        <div class="w-1/4 font-bold text-blueTheme">Condition</div>
        <div class="w-3/4">{{ bid.condition }}</div>
      </div>

      <div class="flex font-noto pb-3">
        <div class="w-1/4 font-bold text-blueTheme">Notes</div>
        <div class="w-3/4">{{ bid.note }}</div>
      </div>

      <div class="pt-3 pb-2 text-xl text-blueTheme font-semibold text-center">
        Current Bid
      </div>
      <div class="pb-2 text-lg text-redTheme font-semibold text-center">
        {{ formatPrice(bid.currentPrice) }}
      </div>

      <div class="pt-3 pb-2 text-xl text-blueTheme font-semibold text-center">
        Available Until
      </div>
      <div class="flex gap-5 text-2xl text-white text-center justify-center">
        <div class="border-2 rounded-3xl bg-darkGreyTheme p-6 min-w-[80px]">
          {{ timer.day }}
        </div>
        <div class="border-2 rounded-3xl bg-darkGreyTheme p-6 min-w-[80px]">
          {{ timer.hour }}
        </div>
        <div class="border-2 rounded-3xl bg-darkGreyTheme p-6 min-w-[80px]">
          {{ timer.minute }}
        </div>
        <div class="border-2 rounded-3xl bg-darkGreyTheme p-6 min-w-[80px]">
          {{ timer.second }}
        </div>
      </div>
      <div class="flex gap-5 text-lg text-blueTheme text-center justify-center">
        <div class="min-w-[80px]">Days</div>
        <div class="min-w-[80px]">Hours</div>
        <div class="min-w-[80px]">Minutes</div>
        <div class="min-w-[80px]">Seconds</div>
      </div>

      <div v-if="currentUser && !owner">
        <form class="py-9 flex flex-col" @submit.prevent="submitBidPrice">
          <input
            type="text"
            id="bid"
            name="bid"
            class="border-2 rounded-lg p-1 px-10 disabled:bg-greyTheme"
            v-model="bidPrice"
            :disabled="bidded"
          />
          <div class="flex justify-center">
            <CustomButton
              v-if="!bidded"
              class="mt-5 w-1/2 min-h-[50px]"
              :name="'Place a bid'"
              :active="true"
            />
          </div>
          <div v-if="bidded" class="text-xl text-redTheme text-center mt-5">
            Thank you for joining this bid. We will inform you if you win this
            one!
          </div>
        </form>
      </div>
      <div
        v-else-if="currentUser && owner"
        class="text-xl text-blueTheme text-center mt-10"
      >
        You owner of this bid.
      </div>
      <div v-else class="text-xl text-redTheme text-center mt-10">
        You must login to join this bid.
      </div>
    </div>
  </div>
</template>
