<script>
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}

</script>

<template>
  <div class="w-full h-full bg-gradient-to-br from-white to-sky-100">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
