
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, //to get our database from firebase
  ref, //it gives us a specific references in our databse
  push, // it creates a new location in a given reference
  set, //  it adds data to our database
  onValue, // it reads data from our database.
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: "AIzaSyAI49bgz2RZ_GT-hL_bB3hzXdG0abzFsec",
    authDomain: "blogproject-5a46d.firebaseapp.com",
    projectId: "blogproject-5a46d",
    storageBucket: "blogproject-5a46d.appspot.com",
    messagingSenderId: "718005720557",
    appId: "1:718005720557:web:05c64838d977bb243683e4",
    measurementId: "G-H9XV8EH68Z"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };



