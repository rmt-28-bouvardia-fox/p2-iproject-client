<script>
import ClubForm from '../components/ClubForm.vue'
export default {
    components: {
        ClubForm
    }
}
</script>
<template>
<section id="newTeam-section" class="d-flex justify-content-center" style="height: 100vh; background-color: #000123; ">
    <div class="p-2 text-dark border border-5 border-primary" style="margin: auto 0; width: 45%;">
        <div class="p-4" style="margin: auto;" id="newTeam-card">
            <h1>Edit team</h1>
            <div id="newTeam">
                <ClubForm type="edit" />
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
#newTeam-card{
    background-color: rgb(255, 255, 255);
}
</style>