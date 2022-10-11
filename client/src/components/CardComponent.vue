<script>
export default {
  props: ["news"],
};
</script>
<template>
  <div class="card">
    <div class="left">
      <h3 class="card-title">{{ news.title }}</h3>
      <div class="card-desc">
        {{ news.description }}
      </div>
    </div>
    <div class="right">
      <img class="card-img" :src="news.urlToImage" alt="" />
    </div>
  </div>

  <div class="line"></div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.left {
  padding: 1rem;
  margin-right: 50px;
}

.card-title {
  font-weight: 600;
  font-size: 1.25rem;
}

.card-desc {
  font-weight: 300;
  font-size: 0.75rem;
  margin: 1rem 0;
}

.card-img {
  width: 500px;
  height: 300px;
  object-fit: cover;
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
