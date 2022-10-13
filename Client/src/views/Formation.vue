<script>
</script>
<template>
<div>
    <div style="margin-left: 20%; margin-top: 8%;" v-if="true">
        <div class="formation-div" style="z-index: -10;">
            <img width="500" class="formation" src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/imageuploader_cms/c9127291f7bd7b49403a0aa9081f07ac4b6d/i640x640.jpg" alt="">
        </div>
        <div class="d-flex attacker">
            <p>7</p>
            <p>9</p>
            <p>10</p>
        </div>
        <div class="d-flex mildfielder">
            <p>8</p>
            <p>11</p>
            <p>6</p>
        </div>
        <div class="d-flex CB">
            <p>2</p>
            <p>3</p>
        </div>
        <div class="d-flex WB">
            <p>5</p>
            <p>4</p>
        </div>
        <div class="d-flex GK">
            <p>1</p>
        </div>
    </div>
    
    <div style="margin-left: 20%; margin-top: 8%;" v-if="false">
        <div class="formation-div" style="z-index: -10;">
            <img width="500" class="formation" src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/imageuploader_cms/0a34bb2d1266e040747af609204651895a02/i640x640.jpg" alt="">
        </div>
        <div class="d-flex attacker2">
            <p>9</p>
            <p>10</p>
        </div>
        <div class="d-flex mildfielder2">
            <p>7</p>
            <p>11</p>
        </div>
        <div class="d-flex WMF">
            <p>8</p>
            <p>6</p>
        </div>
        <div class="d-flex CB">
            <p>2</p>
            <p>3</p>
        </div>
        <div class="d-flex WB">
            <p>5</p>
            <p>4</p>
        </div>
        <div class="d-flex GK">
            <p>1</p>
        </div>
    </div>
</div>
<div id="player-table" class="d-flex justify-content-end">
    <div id="player-formation" class="text-bg-light p-4 d-flex">
        <div id="starter">
            <h2>Starter</h2>
            <p>1. Courtouis</p>
            <p>2. Alaba</p>
            <p>3. Rudiger</p>
            <p>4. Carvajal</p>
            <p>5. Mendy</p>
            <p>6. Valverde</p>
            <p>7. Hazard</p>
            <p>8. Kroos</p>
            <p>9. Benzema</p>
            <p>10. Modric</p>
            <p>11. Vini Jr.</p>
        </div>
        <div id="subtitutes">
            <h2>Subtitutes</h2>
            <p>12. Marcelo</p>
            <p>13. Camavinga</p>
            <p>14. Rodrygo</p>
            <p>15. Lunin</p>
            <p>11. Militao</p>
        </div>
    </div>

</div>
</template>

<style scoped>

#player-formation{
    width: 30%;
}

#player-formation p{
    margin-bottom: 1px;
    font-size: 18px;
}

#player-table{
    margin-top: -27%;
    height: 70vh
}
.formation {
    transform: rotate(-90deg);
}

.formation-div {
    margin-left: 10%;
}

#subtitutes{
    margin-left: 80px;
}

.attacker {
    margin-left: 18%;
    position: absolute;
    margin-top: -25%;
}

.attacker p {
    color: yellow;
    margin: 0 28px;
    font: small-caps bold 25px cursive;
}

.mildfielder {
    margin-left: 17%;
    position: absolute;
    margin-top: -16%;
}

.mildfielder p {
    color: yellow;
    margin: 0 30px;
    font: small-caps bold 25px cursive;
}

.attacker2 {
    margin-left: 21%;
    position: absolute;
    margin-top: -24%;
}

.attacker2 p {
    color: yellow;
    margin: 0 26px;
    font: small-caps bold 25px cursive;
}

.mildfielder2 {
    margin-left: 21%;
    position: absolute;
    margin-top: -15.5%;
}

.mildfielder2 p {
    color: yellow;
    margin: 0 26px;
    font: small-caps bold 25px cursive;
}

.WMF {
    margin-left: 11%;
    position: absolute;
    margin-top: -18%;
}

.WMF p {
    color: yellow;
    margin: 0 98px;
    font: small-caps bold 25px cursive;
}

.CB {
    margin-left: 21%;
    position: absolute;
    margin-top: -6.5%;
}

.CB p {
    color: yellow;
    margin: 0 30px;
    font: small-caps bold 25px cursive;
}

.WB {
    margin-left: 11%;
    position: absolute;
    margin-top: -8.5%;
}

.WB p {
    color: yellow;
    margin: 0 100px;
    font: small-caps bold 25px cursive;
}

.GK p {
    color: yellow;
    margin: 0 100px;
    font: small-caps bold 25px cursive;
}

.GK {
    margin-left: 18.5%;
    position: absolute;
}
</style>
