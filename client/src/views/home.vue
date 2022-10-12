<script>
    import Sidebar from '../components/sidebar.vue'
    import ListMusicCard from '../components/listMusicCard.vue'
    import MusicPlayer from '../components/musicplayer.vue'
    export default{
        components:{
            Sidebar,
            ListMusicCard,
            MusicPlayer
        }
    }
</script>

<template>
    <Sidebar />

    <ListMusicCard />

    <MusicPlayer />
</template>