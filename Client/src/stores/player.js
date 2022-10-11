import { defineStore } from 'pinia'
import axios from 'axios';

export const usePlayerStore = defineStore('player', {
    state: () => (
        {
            players: [],
            myPlayers: [],
            baseUrl: 'http://localhost:3000'
        }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
       
    },
})
