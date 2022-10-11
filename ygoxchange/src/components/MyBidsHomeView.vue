<script>
import CustomButton from "@/components/CustomButton.vue";
export default {
  components:{
    CustomButton
  }
};
</script>

<template>
  <div class="flex pt-10 pb-8 justify-end ">
    <router-link to="/new-bid">
      <CustomButton class="w-full" :name="'Add New Auction'" :active="true"
    /></router-link>
  </div>
  <div class="bg-lightGreyTheme h-screen border-1 rounded-lg"></div>
</template>
