<script>
</script>
<template>
<div id="background" class="d-flex" style="height: 100vh;">
    <div id="box" class="m-auto p-5 d-flex justify-content-center text-light " style="border-radius: 9%; align-items: center; width: 90%; height: 90vh;">

        <div class="row d-flex">
            <div class="col-7 mx-5">
                <div>
                    <h5 style="font-size: 200%;">Dream Football</h5>
                </div>
                <div>
                    <h1 style="font-size: 600%;">LET's Create</h1>
                    <h1 style="font-size: 600%;">Your Dream</h1>
                    <h1 style="font-size: 600%;">Football Team</h1>
                </div>
            </div>
            <div class="col-3">
                <img src="../assets/man.png" width="300" alt="">
            </div>

            <div class="row mx-5 d-flex" style="width: 60%;">
                <RouterLink to="/login" class="col-3 btn btn-primary buttons">Sign In</RouterLink>
                <RouterLink to="/register" class="col-3 btn btn-success buttons">Sign Up</RouterLink>
                <button class="col-3 btn btn-danger buttons">Sign In with FB</button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
#background {
    background-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)), url("https://images5.alphacoders.com/571/thumb-1920-571559.jpg");
    background-position: 20%;
    background-repeat: initial;
}

#box {
    background-color: rgba(0, 0, 0, 0.75);
}

.buttons {
    width: 26%;
    margin: 9px 20px;
}
</style>
