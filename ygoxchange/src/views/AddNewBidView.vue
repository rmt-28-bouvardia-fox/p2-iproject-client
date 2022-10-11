<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<template>
  <div v-if="step === 1">
    <div>step 1</div>
  </div>
  <div v-if="step === 2">
    <div>step 2</div>
  </div>
</template>
