<script>
import LogoIcon from "./icons/LogoIcon.vue";
export default { components: { LogoIcon } };
</script>

<template>
  <div
    class="fixed flex bg-darkGreyTheme h-[12vh] z-[9999] w-full items-center text-white border-b-8 border-b-[#D4BA52] drop-shadow-xl"
  >
    <div class="w-1/4">
      <LogoIcon />
    </div>
    <div class="w-2/4 flex content-center justify-evenly text-lg">
      <a href="">Home</a>
      <a href="">My Bids</a>
      <a href="">Database</a>
    </div>
    <div class="w-1/4 text-lg text-center">
      <div class="flex justify-center items-center gap-4">
        <IconifyIcon icon="bxs:user" />
        <p>Hello, Yugi Mutou!</p>
      </div>
    </div>
  </div>
</template>
