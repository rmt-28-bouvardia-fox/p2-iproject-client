<script>
import { mapActions, mapWritableState } from 'pinia';
import ClubForm from '../components/ClubForm.vue'
import { usePlayerStore } from '../stores/player';
import { useUserStore } from '../stores/user';
export default {
    components: {
        ClubForm
    },
    methods: {
        ...mapActions(useUserStore, ['createTeam'])
    },
    computed: {
        ...mapWritableState(useUserStore, ['newTeam'])
    }
}
</script>
<template>
<section id="newTeam-section" class="d-flex justify-content-center" style="height: 100vh; background-color: #000123; ">
    <div class="p-2 text-dark border border-5 border-success" style="margin: auto 0; width: 45%;">
        <div class="p-4" style="margin: auto;" id="newTeam-card">
            <h1>Create your team</h1>
            <div id="newTeam">
                <ClubForm type="create" @formAction="createTeam" :team="newTeam" typeForm="create" />
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>
#newTeam-card{
    background-color: white;
}
</style>