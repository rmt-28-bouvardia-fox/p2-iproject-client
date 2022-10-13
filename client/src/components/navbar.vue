<script>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vehicle Rental</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" ><RouterLink class="btn btn-dark" to="/">Home</RouterLink></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><RouterLink class="btn btn-dark" to="">Log Out</RouterLink></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>