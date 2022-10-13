<script>
    import { mapState } from 'pinia'
    import { useUserStore } from '../stores/user'
    export default{
        computed:{
            ...mapState(useUserStore,['img'])
        }
    }
</script>

<template>
    <div v-html="img"></div>
</template>