<script></script>
<template>
  <div class="container">
    <div class="top-wrapper">
      <h1 class="logo">The Hacktiv Times</h1>
      <ul class="link-wrapper">
        <li>
          <RouterLink to="/login" class="link user-btn">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/register" class="link user-btn">Register</RouterLink>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="bottom-wrapper">
      <ul class="link-wrapper">
        <li>
          <RouterLink to="/" class="link news-category">Sports</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link news-category">Business</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link news-category"
            >Entertainment</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/" class="link news-category">Health</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link news-category">Science</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link news-category">Technology</RouterLink>
        </li>
      </ul>
      <div class="line2-top"></div>
      <div class="line2-bottom"></div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.container {
  width: 100%;
  padding: 1rem 8rem;
}

.top-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.line {
  width: 100%;
  margin: 1rem 0;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.158);
}

.line2-top {
  margin-top: 1rem;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.5);
}
.line2-bottom {
  width: 100%;
  margin: 0.3rem 0;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.5);
}

.logo {
  font-family: "Great Vibes", cursive;
}

.link-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  margin-left: 1rem;
}

.user-btn {
  border: 1px solid black;
  padding: 0.3rem 1.4rem;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  transition: all 0.4s ease-in-out;
}

.user-btn:hover {
  background-color: transparent;
  color: #000;
}

.news-category {
  font-size: 12px;
  color: #000;
  font-weight: 400;
}
</style>
