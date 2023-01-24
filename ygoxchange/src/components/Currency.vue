<script>
export default {
  props: ["price", "currency"],
  data() {
    return {
      converted: 0,
    };
  },
  computed: {
    convert() {
      const format = {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      };
      return Intl.NumberFormat("id-ID", format).format(
        this.price / this.currency
      );
    },
  },
  created() {
    this.converted = this.convert;
  },
};
</script>

<template>
  <span>
    {{ converted }}
  </span>
</template>
