import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBNvjQy78e28zWhJNLNrQs9p2zrrYvJcHg",
    authDomain: "comments-f6aec.firebaseapp.com",
    databaseURL: "https://comments-f6aec-default-rtdb.firebaseio.com",
    projectId: "comments-f6aec",
    storageBucket: "comments-f6aec.appspot.com",
    messagingSenderId: "979717067120",
    appId: "1:979717067120:web:8acef0749c77543d553fb5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export default db