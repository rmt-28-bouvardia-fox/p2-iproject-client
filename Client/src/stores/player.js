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
            opponents: [],
            match: {}
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async refresh() {
            try {
                const { data } = await axios({
                    url: `${this.baseUrl}/players?page=${this.page}`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
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
                const { data } = await axios({
                    url: `${this.baseUrl}/players/myPlayers`,
                    method: 'GET',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.myPlayers = data
            } catch (error) {
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
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1800
                })
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
            }
        },
        async sellPlayer(id) {
            try {
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data
                })
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
                    let timerInterval = 0
                    Swal.fire({
                        title: 'Match in progress!',
                        width: 800,
                        background: '#fff url(/ images / trees.png)',
                        backdrop: `
                                rgba(0,0,0,0.7)
                                url("/images/nyan-cat.gif")
                                left top
                                no-repeat
                            `,
                        imageUrl: 'https://news.motability.co.uk/wp-content/uploads/2017/09/thumbnail-6a7a7e916f7922880d413497f8f79362-1140x618.jpeg',
                        imageHeight: 400,
                        html: 'Match will end in <b></b> milliseconds.',
                        timer: 4000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: async () => {
                            clearInterval(timerInterval)
                            const { data } = await axios({
                                url: `${this.baseUrl}/opponents/${id}`,
                                method: 'GET',
                                headers: {
                                    access_token: localStorage.access_token
                                }
                            })
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: data.result,
                                showConfirmButton: false,
                                timer: 1500,
                                text: data.score
                            })
                            this.match.result = data.result
                            this.match.score = data.score
                        }
                    })
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: `Cannot play`,
                    text: error.response.data
                })
            }
        }
    },
})

