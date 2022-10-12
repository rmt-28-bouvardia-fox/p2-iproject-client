import { defineStore, mapActions } from 'pinia'
import axios from 'axios';


export const usePlayerStore = defineStore('player', {
    state: () => (
        {
            players: [],
            myPlayers: [],
            baseUrl: 'http://localhost:3000',
            newPlayer: {},
            page: 0,
            totalPlayers: 0,
            playerSearch: '',
            totalPages: 0,
            player: {},
            opponents: []
        }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        async fetchPlayerStore() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players?page=${this.page}&search=${this.playerSearch}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.players = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchAllPlayers() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players/allPlayers`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.totalPlayers = data.length
                this.totalPages = Math.ceil(this.totalPlayers / 12)
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMyPlayers() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players/myPlayers`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.myPlayers = data
            } catch (error) {
                console.log(error);
            }  
        },
        async buyPlayer(id) {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players/${id}`,
                    method: 'POST',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                console.log(data);
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async randomBuy() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players/randomBuy`,
                    method: 'POST',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                console.log(data);
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async sellPlayer(id) {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players/myPlayers/${id}`,
                    method: 'DELETE',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.router.push('/myPlayers')
                this.fetchMyPlayers()
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
        async findOnePlayer(id) {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players/myPlayers/${id}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.player = data
                this.router.push(`/playerDetail/${id}`)
            } catch (error) {
                
            }
        },
        async fetchOpponents() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/opponents`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.opponents = data
            } catch (error) {
                console.log(error);
            }
        },
        async playGame(id) {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/opponents/${id}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    },
})
