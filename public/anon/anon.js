const firebaseConfig = {

    apiKey: "AIzaSyA5ZcvaDl5a7LSzybtDN3oVHAINYnl9d4Y",

    authDomain: "pbwaitingroom.firebaseapp.com",

    projectId: "pbwaitingroom",

    storageBucket: "pbwaitingroom.appspot.com",

    messagingSenderId: "650948440205",

    appId: "1:650948440205:web:615f395f40cf5e1e98b2c4",

    measurementId: "G-Y6VZ26DWPP"

};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

firebase.auth().signInAnonymously()
    .then(() => {
        window.location.replace("../mapleaio/index.html");
        console.log("Signed in");
    })
    .catch((error) => {
        console.log("this didn't work");
    });