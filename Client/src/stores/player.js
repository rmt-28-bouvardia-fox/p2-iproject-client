import { defineStore, mapActions } from 'pinia'
import axios from 'axios';


export const usePlayerStore = defineStore('player', {
    state: () => (
        {
            players: [],
            myPlayers: [],
            baseUrl: 'https://dreamfootball1.herokuapp.com',
            newPlayer: {},
            page: 0,
            totalPlayers: 0,
            playerSearch: '',
            totalPages: 0,
            player: {},
            opponents: [],
            match: {},
            showLoadingP: false,
            totalSearchPlayers: 0,
            showLoadingMatch:false
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
                this.showLoadingP = false
                
            } catch (error) {
                this.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error
                })
            }
        },
        async refresh() {
            try {
                this.page = 0
                const { data } = await axios({
                    url: `${this.baseUrl}/players?page=${this.page}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.totalPages = Math.ceil(this.totalPlayers / 12)
                this.players = data
                this.playerSearch = ''
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async fetchMyPlayers() {
            try {
                this.showLoadingP = true
                const { data } = await axios({
                    url: `${this.baseUrl}/players/myPlayers`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.myPlayers = data
                this.showLoadingP = false
            } catch (error) {
                this.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }  
        },
        async buyPlayer(id) {
            try {
                let result = await Swal.fire({
                    title: 'Are you sure want to buy this player ?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: `Yes, I'm sure!`
                })
                if (result.isConfirmed) {
                    this.showLoadingP = true
                    const { data } = await axios({
                        url: `${this.baseUrl}/players/${id}`,
                        method: 'POST',
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })                  
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1800
                    })
                }
                this.showLoadingP = false
            } catch (error) {
                this.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async randomBuy() {
            try {
                this.showLoadingP = true
                const { data } = await axios({
                    url: `${this.baseUrl}/players/randomBuy`,
                    method: 'POST',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1800
                })
                this.showLoadingP = false
            } catch (error) {
                this.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async sellPlayer(id) {
            try {
                this.showLoadingP = true
                let result = await Swal.fire({
                    title: 'Are you sure sell this player ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: `Yes, I'm sure!`
                })
                if (result.isConfirmed) {
                    let { data } = await axios({
                        url: `${this.baseUrl}/players/myPlayers/${id}`,
                        method: 'DELETE',
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })
                    this.showLoadingP = false
                    this.router.push('/myPlayers')
                    this.fetchMyPlayers()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1800
                    })
                }
            } catch (error) {
                this.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async findOnePlayer(id) {
            try {
                this.showLoadingP = true
                const { data } = await axios({
                    url: `${this.baseUrl}/players/myPlayers/${id}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.player = data
                this.router.push(`/playerDetail/${id}`)
                this.showLoadingP = false
            } catch (error) {
                this.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async fetchOpponents() {
            try {
                this.showLoadingP = true
                const { data } = await axios({
                    url: `${this.baseUrl}/opponents`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.opponents = data
                this.showLoadingP = false
            } catch (error) {
                his.showLoadingP = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                });
            }
        },
        async playGame(id) {
            try {
                let result = await Swal.fire({
                    title: 'Are you sure want <br> to against this club ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: `Yes, I'm sure!`
                })
                if (result.isConfirmed) {
                    this.showLoadingMatch = true
                    this.showLoadingP = true
                    const { data } = await axios({
                        url: `${this.baseUrl}/opponents/${id}`,
                        method: 'GET',
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })

                    setTimeout(() =>{
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title:'Score: ' + data.score,
                            showConfirmButton: false,
                            timer: 2300,
                            text: data.message
                        })
                        this.showLoadingP = false
                        this.showLoadingMatch = false
                    }, 4000);
                }
            } catch (error) {
                this.showLoadingP = false
                this.showLoadingMatch = false
                Swal.fire({
                    icon: 'error',
                    title: `Cannot play`,
                    text: error.response.data
                })
            }
        }
    },
})

