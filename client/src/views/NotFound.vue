<script>
import Navbar from "./../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <div>
    <div class="home">
      <img
        class="background"
        src="https://images.unsplash.com/photo-1634055980590-1a44e5a8b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <div class="centered">
        <div class="welcoming">
          <h1>404 - NOT FOUND</h1>
        </div>
      </div>
    </div>
  </div>
</template>
