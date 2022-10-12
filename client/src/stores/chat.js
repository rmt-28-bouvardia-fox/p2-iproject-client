import { defineStore } from 'pinia'
import db from '../firebase'
import {ref,limitToFirst, get, query, set, orderByChild} from 'firebase/database'
export const useChatStore = defineStore('chat', {
    state : () =>({
        message : '',
        messages : []
    }),
    actions : {
        fetchMessages(){
            const que = query(ref(db, "Messages2"), orderByChild("createdAt"))

            get(que)
            .then((snapshot) =>{
                snapshot.forEach(childSnapshot =>{
                    this.messages.push(childSnapshot.val())
                })
            })
            .catch((error) =>{
                Swal.fire('server error')
            })
        },

        sendMessage(){
            const date = new Date().getTime()
            set(ref(db, "Messages2/" + this.message), {
                message : this.message,
                user : localStorage.username,
                createdAt : date
            })
            .then(() =>{
                this.message = ''
            })
            .catch((error) =>{
                Swal.fire('server error')
            })
        }
    }
})