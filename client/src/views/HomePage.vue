<script></script>
<template>
  <div class="container">
    <div class="home-wrapper">
      <div class="rows">
        <!-- Card -->
        <div class="card">
          <div class="left">
            <h3 class="card-title">Lorem ipsum dolor sit amet.</h3>
            <div class="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus perspiciatis laborum omnis aliquam non sed doloremque
              amet soluta perferendis. Quae?
            </div>
          </div>
          <div class="right">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="card-line"></div>
        <!-- Card -->
        <div class="card">
          <div class="left">
            <h3 class="card-title">Lorem ipsum dolor sit amet.</h3>
            <div class="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus perspiciatis laborum omnis aliquam non sed doloremque
              amet soluta perferendis. Quae?
            </div>
          </div>
          <div class="right">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="card-line"></div>
        <!-- Card -->
        <div class="card">
          <div class="left">
            <h3 class="card-title">Lorem ipsum dolor sit amet.</h3>
            <div class="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus perspiciatis laborum omnis aliquam non sed doloremque
              amet soluta perferendis. Quae?
            </div>
          </div>
          <div class="right">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="card-line"></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="sidebar"></div>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
  padding: 0 8rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.home-wrapper {
  flex: 1.2;
}

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
.card-line {
  width: 100%;
  height: 1px;
  background-color: rgba(122, 122, 122, 0.235);
  margin: 1rem 0;
}
.line {
  min-height: 100vh;
  width: 1px;
  background-color: #000;
  margin: 0 1rem;
}
.sidebar {
  flex: 0.5;
}
</style>
