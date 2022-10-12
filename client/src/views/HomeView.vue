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
          Dear Groom's/Bride's to be,
          <br />
          <br />
          This is a website that will help you prepare invitations for your
          special day.
          <br />
          Please, follow the instruction bellow and enjoy making your wedding
          invitation.
          <br />
          <br />
        </div>
        <div class="instruction d-flex flex-row">
          <div class="circle">1. Register/Login</div>
          <div class="circle">2. Choose template</div>
          <div class="circle">3. Write your data</div>
          <div class="circle">4. Done and Share!</div>
        </div>
        <br />
        <br />
        <div class="quote">
          If I had a flower for every time I thought of You, I could walk in my
          garden forever.
          <br />
          - Lord Alfred Tennyson -
        </div>
      </div>
    </div>
  </div>
</template>
