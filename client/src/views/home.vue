<script>
    import Sidebar from '../components/sidebar.vue'
    import ListMusicCard from '../components/listMusicCard.vue'
    import MusicPlayer from '../components/musicplayer.vue'
    import { mapActions,mapWritableState } from 'pinia'
    import { useMusicStore } from '../stores/music'
    import { useUserStore } from '../stores/user'
    export default{
        components:{
            Sidebar,
            ListMusicCard,
            MusicPlayer
        },
        methods:{
            ...mapActions(useMusicStore,['fetchMusic'])
        },
        computed:{
            ...mapWritableState(useUserStore,['page']),
            ...mapWritableState(useMusicStore,['tracks'])
        },
        created(){
            this.fetchMusic()
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <Sidebar />
            </div>
            <div class="col-md-9">
                <MusicPlayer v-if="this.page == 'music'"/>
            </div>
            <ListMusicCard v-if="this.page == 'list'"
            v-for="track in tracks" :key="track.id"
            :track="track"
            />
        </div>
    </div>
</template>