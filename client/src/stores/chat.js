import { defineStore } from 'pinia'
import db from '../firebase'

export const useChatStore = defineStore('chat', {
    state : () =>{
        messages : ''
    },
    actions : {
        sendMessage(){
            const messagesRef = db.database().ref("messages")


            const message = {
                username : localStorage.username,
                content : this.messages
            }

            messagesRef.push(message)
            this.messages = ''
        }
    }
})