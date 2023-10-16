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
        updateRange();
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
        ap: ap,
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

            doneLoading();
        };
        xhr.open('GET', url);
        xhr.send();
    })
    .catch((error) => {
        switch (error.code) {
            case 'storage/object-not-found':
                doneLoading();
                break;
            default:
                console.log("download error");
                break;
    }});
}

function doneLoading()
{
    var csv = new XMLHttpRequest();
    csv.responseType = "text";

    csv.onload = (event) => {
        var csvText = csv.response;

        var csvRows = csvText.split("\n");
        for (let i=1; i< csvRows.length; i++)
        {
            var col = csvRows[i].split(",");
            if (col[0] == "") continue;
            baseEquips[col[0]] = {};
            baseEquips[col[0]].level = isANumber(col[1]);
            baseEquips[col[0]].type = typeDict[col[2]];
            baseEquips[col[0]].branch = branchDict[col[3]];
            baseEquips[col[0]].set = setDict[col[4]];
            baseEquips[col[0]].img = col[5]
            baseEquips[col[0]].stats = new Array(STATS_LENGTH).fill(0);
            baseEquips[col[0]].stats[FLAT_STR] = isANumber(col[6]);
            baseEquips[col[0]].stats[FLAT_DEX] = isANumber(col[7]);
            baseEquips[col[0]].stats[FLAT_INT] = isANumber(col[8]);
            baseEquips[col[0]].stats[FLAT_LUK] = isANumber(col[9]);
            baseEquips[col[0]].stats[FLAT_ATTACK] = isANumber(col[10]);
            baseEquips[col[0]].stats[FLAT_DEF] = isANumber(col[11]);
            baseEquips[col[0]].stats[BOSS_DAMAGE] = isANumber(col[12]);
            baseEquips[col[0]].stats[IED] = isANumber(col[13]);
            baseEquips[col[0]].stats[FINAL_DAMAGE] = isANumber(col[14]);
            baseEquips[col[0]].stats[FLAT_HP] = isANumber(col[15]);
            baseEquips[col[0]].stats[FLAT_MP] = isANumber(col[16]);
            baseEquips[col[0]].stats[PERCENT_HP] = isANumber(col[17]);
            baseEquips[col[0]].stats[PERCENT_MP] = isANumber(col[18]);
        }

        let scriptNames = ["character.js", "equips.js", "familiars.js", "hyperstats.js", 
                    "inner.js", "legion.js", "links.js", "symbols.js"];

        for (let i=0; i<scriptNames.length; i++)
        {
            let runScript = document.createElement("script");
            runScript.src = "tabs/" + scriptNames[i];
            document.getElementById("pageBody").appendChild(runScript);
        }

        document.getElementById("app").style.display = "block";
        document.getElementById("loadingScreen").style.display = "none";

        updateRange();
    }

    csv.open('GET', "equips.csv");
    csv.send();
}