<script>
export default {
  props: ["name", "active"],
};
</script>
<template>
  <button
    v-if="active"
    class="h-10 bg-goldTheme rounded-full text-black shadow-lg px-5"
  >
    {{ name }}
  </button>
  <button
    v-else-if="!active"
    class="h-10 bg-white rounded-full text-black shadow-lg px-5"
  >
    {{ name }}
  </button>
</template>
