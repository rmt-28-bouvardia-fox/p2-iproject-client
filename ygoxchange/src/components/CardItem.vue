<script>
import { mapActions } from "pinia";
import { useBidStore } from "@/stores/bid.js";
export default {
  props: ["item"],
  data() {
    return {
      timer: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      interval: null,
      expired: false,
    };
  },
  created() {
    this.runTimer();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    runTimer() {
      this.interval = setInterval(() => {
        this.timerFunction(this.item.expiredBy);
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
  },
};
</script>

<template>
  <div v-if="!expired" class="font-semibold min-w-[250px] p-3 glass">
    <div class="flex justify-center item-center py-4">
      <img :src="item.cardDetail.card_images[0].image_url" width="130" alt="" />
    </div>
    <div class="text-white p-4 pb-3">
      <div class="truncate">{{ item.cardDetail.name }}</div>
      <div class="flex item-center">
        <p class="w-1/2 text-xs text-greyTheme flex items-center">
          Current Bid
        </p>
        <p class="w-1/2">{{ item.currentPrice }}</p>
      </div>
      <div class="flex item-center">
        <p class="w-1/2 text-xs text-greyTheme flex items-center">Created By</p>
        <p class="w-1/2">{{ item.createdBy }}</p>
      </div>
      <div class="flex item-center pt-1">
        <div class="flex-1">
          <div class="pl-4">
            <IconifyIcon icon="fa6-regular:clock" class="text-2xl" />
          </div>
        </div>
        <p v-if="!expired" class="flex-1">
          {{ timer.day }} : {{ timer.hour }} : {{ timer.minute }} :
          {{ timer.second }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(90, 90, 90, 0.502);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
}
</style>
