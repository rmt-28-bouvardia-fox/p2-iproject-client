<script>
export default {
  methods: {
    handleLogout() {
      this.$emit("handleLogout");
    },
  },
  computed: {
    isLogin() {
      return localStorage.access_token;
    },
  },
};
</script>

<template>
  <!-- Header Area Starts -->
  <header class="header-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="logo-area">
            <a href="index.html"
              ><img
                src="https://i.postimg.cc/zDxsJ1Gd/Masakapa-removebg-preview-logo.png"
                alt="logo"
                style="width: 200px"
            /></a>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="custom-navbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="main-menu">
            <ul>
              <li class="active">
                <RouterLink class="nav-link active" aria-current="page" to="/"
                  ><a href="index.html">HOME</a></RouterLink
                >
              </li>
              <li>
                <RouterLink
                  class="nav-link active"
                  aria-current="page"
                  to="/about"
                  ><a href="">about</a></RouterLink
                >
              </li>
              <li v-if="!isLogin">
                <RouterLink
                  class="nav-link active"
                  aria-current="page"
                  to="/login"
                  ><a href="">Login</a></RouterLink
                >
              </li>
              <li v-if="!isLogin">
                <RouterLink
                  class="nav-link active"
                  aria-current="page"
                  to="/register"
                  ><a href="">Register</a></RouterLink
                >
              </li>
              <li v-if="isLogin">
                <a href="" @click.prevent="handleLogout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Area End -->
</template>
