import {initializeApp} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

loginMenu = document.getElementById("loginMenu");

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("submitSignup").onclick = function ()
{
    let email = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let cpassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("signupError");

    if (password != cpassword)
        error.innerHTML = "passwords don't match";

    getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.replace("../mapleaio/index.html");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    })
    .catch((error) => {
        console.log( error.code);
        console.log( error.message);
        error.innerHTML = error.code + error.message;
        // ..
    });
};



document.getElementById("submitLogin").onclick = function ()
{
    let email = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.replace("../mapleaio/index.html");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};