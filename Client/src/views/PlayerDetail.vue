<script>

</script>
<template>
<div id="profilPlayer" class="d-flex justify-content-center align-items-center">
    <div id="boxPlayer" class="text-bg-light p-4 row border border-3 mt-5">
        <div class="col-8 mx-4 mt-5" style="">
            <p><b>Name:</b> Karim Benzema</p>
            <p><b>Age:</b> 31</p>
            <p><b>Position:</b> Central Forward</p>
            <p><b>Rating:</b> 9.1</p>
        </div>
        <div class="col-3 d-flex justify-content-end align-items-start" style="margin-top: 3%; margin-left: -5%;">
            <img src="https://www.realmadrid.com/img/vertical_380px/benzema_av38083_20220809044617.jpg" width="200" alt="">
        </div>
        <div>
            <RouterLink to="/myPlayers" class="btn btn-danger mx-4" style="width: 14%;">Sell</RouterLink>
        </div>
    </div>
</div>

</template>

<style scoped>
#profilPlayer{
    height: 100vh;
}

#boxPlayer{
    width: 50%;
    border-radius: 5%;
    height: 85%;
    margin-top: -3%;
}
p{
    font-size: 25px;
}
</style>
