import { defineStore } from 'pinia'
import axios from 'axios';

export const usePlayerStore = defineStore('player', {
    state: () => (
        {
            players: [],
            myPlayers: [],
            baseUrl: 'http://localhost:3000',
            newPlayer: {},
        }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        async fetchPlayerStore() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.players = data
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    },
})
