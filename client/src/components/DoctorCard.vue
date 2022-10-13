<script>
export default {
  name: "DoctorCard",
  props: ["doctor"],
};
</script>
<template>
  <div class="border rounded-xl shadow-xl">
    <div class="h-[70%]">
      <img
        :src="doctor.imageUrl"
        class="w-full h-full object-center object-cover rounded-t-xl"
      />
    </div>
    <div class="flex flex-col h-[30%] justify-center items-center">
      <p class="font-semibold">{{ doctor.name }}</p>
      <p>{{ doctor.specialist }}</p>
    </div>
  </div>
</template>
