<script>
export default {
  props: ["data"],
};
</script>
<template>
  <a :href="data.url" target="_blank">
    <div class="sidebar-content">
      <h1 class="sidebar-title">{{ data.title }}</h1>
      <p class="sidebar-desc">{{ data.description }}</p>
    </div>
  </a>

  <div class="line"></div>
</template>
<style scoped>
.sidebar-content {
  margin: 1rem 0;
  color: black;
}

.sidebar-title {
  font-size: 14px;
  font-weight: 500;
}

.sidebar-desc {
  font-size: 12px;
  font-weight: 300;
  margin-top: 0.5rem;
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgba(122, 122, 122, 0.235);
  margin: 1rem 0;
}

.line:last-child {
  display: none;
}
</style>
