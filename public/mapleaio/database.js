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
const storage = firebase.storage();
var storageRef = storage.ref();

document.getElementById("app").style.display = "none";

var uid = "";

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        uid = user.uid;

        loadData();
    } else {
        // User is signed out
        window.location.replace("../login/index.html");
    }
});

function saveData()
{
    let data = {
        job: job,
        characterLevel: characterLevel,
        commonLevels: commonLevels,
        skillIEDValue: skillIEDValue,
        VSValue: VSValue,
        equips: equips,
        famLines: famLines,
        famBadges: famBadges,
        hypers: hypers,
        inner: inner,
        eventStats: eventStats,
        weaponSoul: weaponSoul,
        legion: legion,
        links: links,
        symbols: symbols,
    }
    
    let message = JSON.stringify(data);
    
    let userRef = storageRef.child("users/" + uid + "/public");
    let saveRef = userRef.child('save.json');
    saveRef.putString(message).then((snapshot) => {
        console.log('data saved');
    });
      
}

function loadData()
{
    let userRef = storageRef.child("users/" + uid + "/public");
    let loadRef = userRef.child('save.json');
    loadRef.getDownloadURL()
    .then((url) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onload = (event) => {
            var json = xhr.response;

            loadFromJSON(json);

            let scriptNames = ["character.js", "equips.js", "familiars.js", "hyperstats.js", 
                            "inner.js", "legion.js", "links.js", "symbols.js"];
        
            for (let i=0; i<scriptNames.length; i++)
            {
                let runScript = document.createElement("script");
                runScript.src = "tabs/" + scriptNames[i];
                document.getElementById("body").appendChild(runScript);
            }

            document.getElementById("app").style.display = "block";
            document.getElementById("loadingScreen").style.display = "none";
        };
        xhr.open('GET', url);
        xhr.send();
    })
    .catch((error) => {
        switch (error.code) {
            case 'storage/object-not-found':
            
                console.log("file not found");

                break;
            default:
                console.log("download error");
                break;
    }});
}

