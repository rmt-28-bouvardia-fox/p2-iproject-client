<script>
    import Sidebar from '../components/sidebar.vue'
    import ListMusicCard from '../components/listMusicCard.vue'
    import MusicPlayer from '../components/musicplayer.vue'
    import { mapActions } from 'pinia'
    import { useMusicStore } from '../stores/music'
    export default{
        components:{
            Sidebar,
            ListMusicCard,
            MusicPlayer
        },
        methods:{
            ...mapActions(useMusicStore,['fetchMusic'])
        },
        created(){
            this.fetchMusic()
        }
    }
</script>

<template>
    <!-- <Sidebar /> -->

    <!-- <ListMusicCard /> -->

    <MusicPlayer />
</template>