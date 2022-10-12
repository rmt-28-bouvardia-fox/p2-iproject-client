import { defineStore } from 'pinia'
import db from '../firebase'
import {ref,limitToFirst, get, query, set} from 'firebase/database'
export const useChatStore = defineStore('chat', {
    state : () =>({
        message : '',
        messages : []
    }),
    actions : {
        fetchMessages(){
            const que = query(ref(db, "Messages"))

            get(que)
            .then((snapshot) =>{
                snapshot.forEach(childSnapshot =>{
                    this.messages.push(childSnapshot.val(), limitToFirst(30))
                })
            })
            .catch((error) =>{
                console.log(error)
            })
        },

        sendMessage(){
            const date = new Date()
            set(ref(db, "Messages/" + this.message), {
                message : this.message,
                user : localStorage.username,
                createdAt : date
            })
            .then(() =>{
                console.log('success')
                this.message = ''
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
})