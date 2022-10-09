<script>
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
        this.timerFunction();
      }, 1000);
    },
    timerFunction() {
      let deadline = new Date(this.item.expiredBy).getTime();
      let now = new Date().getTime();
      let time = deadline - now;

      let day = Math.floor(time / (1000 * 60 * 60 * 24));
      let hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((time % (1000 * 60)) / 1000);

      this.timer = { day, hour, minute, second };

      if (time < 0) {
        clearInterval(this.interval);
      }
    },
  },
};
</script>

<template>
  <div class="font-semibold min-w-[250px] shadow-lg">
    <div class="flex justify-center item-center py-4">
      <img
        :src="item.cardDetail.card_images[0].image_url"
        width="130"
        alt=""
      />
    </div>
    <div class="bg-blueTheme text-white p-4 rounded-lg">
      <div class="truncate">{{item.cardDetail.name}}</div>
      <div class="flex item-center">
        <p class="w-1/2 text-xs text-greyTheme">Current Bid</p>
        <p class="w-1/2">{{item.currentPrice}}</p>
      </div>
      <div class="flex item-center">
        <p class="w-1/2 text-xs text-greyTheme">Created By</p>
        <p class="w-1/2">Joe</p>
      </div>
      <div class="flex item-center">
        <div class="flex-1">
          <div class="pl-4">
            <IconifyIcon icon="fa6-regular:clock" class="text-2xl" />
          </div>
        </div>
        <p v-if="!expired" class="flex-1">
          {{ timer.day }} : {{ timer.hour }} : {{ timer.minute }} :
          {{ timer.second }}
        </p>
        <p v-if="expired" class="flex-1 text-redTheme">Expired</p>
      </div>
    </div>
  </div>
</template>
