// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "Insert your API key here",
    authDomain: "",
    databaseURL: "Enter Your DB url here",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "92610498763",
    appId: "",
    measurementId: ""
  };

  // enter your db configuration above

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

