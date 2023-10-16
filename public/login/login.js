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

document.getElementById("signupMenu").style.display = "none";

document.getElementById("gotoSignup").onclick = function () {
    document.getElementById("signupMenu").style.display = "flex";
    document.getElementById("loginMenu").style.display = "none";
}

document.getElementById("gotoLogin").onclick = function () {
    document.getElementById("signupMenu").style.display = "none";
    document.getElementById("loginMenu").style.display = "flex";
}

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("submitSignup").onclick = function ()
{
    let email = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let cpassword = document.getElementById("confirmPassword").value;
    let errorMsg = document.getElementById("signupError");

    if (password != cpassword)
    { 
        errorMsg.innerHTML = "passwords don't match"; 
        errorMsg.style.display = "flex"; 
        return;
    }

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
            errorMsg.innerHTML = error.message;
            errorMsg.style.display = "flex";
        });
    })
    .catch((error) => {
        errorMsg.innerHTML = error.message;
        errorMsg.style.display = "flex";
        // ..
    });
};



document.getElementById("submitLogin").onclick = function ()
{
    let email = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let errorMsg = document.getElementById("loginError");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.replace("../mapleaio/index.html");
        // ...
    })
    .catch((error) => {
        errorMsg.innerHTML = error.message;
        errorMsg.style.display = "flex";
    });
};