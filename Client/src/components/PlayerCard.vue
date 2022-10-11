<script>
</script>
<template>
<div class="card col-4 mx-2 player">
    <img width="30" height="220" src="https://www.realmadrid.com/img/vertical_380px/benzema_av38083_20220809044617.jpg" class="card-img-top" alt="...">
    <div class="card-body text-bg-primary infoP">
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Name: </b></p>
            <p class="card-text">Karim Benzema</p>
        </div>
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Position: </b></p>
            <p class="card-text">CF</p>
        </div>
        <div class="d-flex justify-content-between">
            <p class="card-text"><b>Rating: </b></p>
            <p class="card-text">91</p>
        </div>
    </div>
</div>
</template>
<style scoped>
.infoP {
    margin-left: -6%;
    width: 112%;
    margin-bottom: -2%;
    border-radius: 5%;
}

.player:hover{
    cursor: pointer;
    opacity: 200%;
}

.player{
    width: 15rem;
    box-shadow: 4px 6px 6px 6px black;
    opacity: 80%;

}

p {
    font-size: 17px;
}
</style>
