<script>
export default {
    props: ['typeForm', 'team'],
    methods: {
        formAction() {
            this.$emit('formAction')
        }
    }
}
</script>
<template>
<form id="newTeam-from" @submit.prevent="formAction" style="width: 80%;">
    <div class="mb-3 mt-3">
        <div class="d-flex justify-content-between">
            <label for="clubName">Club Name <label class="text-danger text-end fw-bold">*</label></label>
        </div>
        <input v-model="team.name" type="text" class="form-control form-control-lg" id="clubName" placeholder="ex: Real Madrid" autocomplete="off">
    </div>
    <div class="mb-3 mt-3">
        <div class="d-flex justify-content-between">
            <label for="clubLogo">Logo <label class="text-danger text-end fw-bold">*</label></label>
        </div>
        <input v-model="team.logo" type="text" class="form-control form-control-lg" id="clubLogo" placeholder="input image link" autocomplete="off">
    </div>
    <div class="justify-content-around">
        <button v-if="typeForm == 'create'" class="btn" style="width: 40%; background-color: blue; color:white ;" type="submit">Create</button>
        <RouterLink v-if="typeForm == 'edit'" to="/profile" class="btn" style="width: 40%; background-color: blue; color:white ;" type="submit">Save</RouterLink>
    </div>
</form>
</template>

<style scoped>
</style>
