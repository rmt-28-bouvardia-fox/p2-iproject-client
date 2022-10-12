<script></script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="../assets/orange-agriculture-icon-png-0.png"
          alt="Bootstrap"
          width="40"
          height="40"
        />
      </RouterLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/" >Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/mylist" >My Bid</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Analytic Prices</a>
          </li>
        </ul>
        <button type="button" class="btn btn-outline-danger ">
          Sign-Out
        </button>
      </div>
    </div>
  </nav>
</template>
