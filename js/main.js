const successChances = [];
successChances.push(
    95.0,90.0,85.0,85.0,80.0,
    75.0,70.0,65.0,60.0,55.0,
    50.0,45.0,40.0,35.0,30.0,
    30.0,30.0,30.0,30.0,30.0,
    30.0,30.0);

const boomChances = [];
boomChances.push(
    0.0,0.0,0.0,0.0,0.0,
    0.0,0.0,0.0,0.0,0.0,
    0.0,0.0,0.0,0.0,0.0,
    0.0,0.0,3.0,3.0,3.0,
    10.0,10.0
);

const itemImgs = [];
itemImgs["zerk"] = "img/Eqp_Berserked.webp";
itemImgs["mep"] = "img/Eqp_Magic_Eyepatch.webp";
itemImgs["belt"] = "img/Eqp_Dreamy_Belt.webp";
itemImgs["et"] = "img/Eqp_Endless_Terror.webp";
itemImgs["cfe"] = "img/Eqp_Commanding_Force_Earring.webp";
itemImgs["sos"] = "img/Eqp_Source_of_Suffering.webp";
itemImgs["sos20"] = "img/Eqp_Source_of_Suffering.webp";
itemImgs["sos21"] = "img/Eqp_Source_of_Suffering.webp";
itemImgs["sosrep"] = "img/Eqp_Source_of_Suffering.webp";

const itemLevel = [];
itemLevel["zerk"] = 160.0;
itemLevel["mep"] = 160.0;
itemLevel["belt"] = 200.0;
itemLevel["et"] = 200.0;
itemLevel["cfe"] = 200.0;
itemLevel["sos"] = 160.0;
itemLevel["sos20"] = 160.0;
itemLevel["sos21"] = 160.0;
itemLevel["sosrep"] = 160.0;


const safeguard = 1.05;

function fullSend(currentStar, failCount, repeat, level)
{
    let cost = 0.0;
    while (true)
    {
        let deltaCost = 0.0;
        if (currentStar < 10)
            deltaCost += 100.0 * (Math.round(Math.pow(level, 3.0)) * ((currentStar + 1) )/ 2500.0 + 10.0);
        else if (currentStar < 15)
            deltaCost += 100.0 * (Math.round(Math.pow(level, 3.0)) * (Math.pow((currentStar + 1), 2.7))/ 40000.0 + 10.0);
        else    
            deltaCost += 100.0 * (Math.round(Math.pow(level, 3.0)) * (Math.pow((currentStar + 1), 2.7))/ 20000.0 + 10.0);

        if (currentStar < 17 && currentStar > 11)
            deltaCost = deltaCost * 2.0;
        
        cost += deltaCost;
        
        if (failCount >= 2)
        {
            currentStar += 1;
            failCount = 0;
        }
        
        let success = Math.random() * 100.0;
        let boom = Math.random() * 100.0;

        if (success < (successChances[currentStar] * safeguard))
        {
            currentStar += 1;
            failCount = 0;
        }
        else if (boom < boomChances[currentStar])
        {
            return [currentStar, cost];
        }
        else
        {
            if (currentStar > 10 && currentStar != 15 && currentStar != 20 && repeat == false)
            {
                failCount += 1;
                currentStar -= 1;
            }
        }

        if (currentStar >= 22)
        {
            return [currentStar, cost];
        }
    }
}

function tapOnce(currentStar, failCount, repeat)
{
    
}

function select()
{
    var e = document.getElementById("item");
    var item = e.value;

    document.getElementById("itemImg").src = itemImgs[item];
    
    let pass = 0.0;
    let boom = 0.0;

    for (let i = 0; i < 10000; i++) { 

        let currentStar = 0;
        let failCount = 0;
        let repeat = false;

        if(item == "sos20")
            currentStar = 20;
        else if (item == "sos21")
            currentStar = 21;
        else if (item == "sosrep")
        {
            currentStar = 21;
            repeat = true;
        }

        let result = fullSend(currentStar, failCount, repeat, itemLevel[item]);
        if (result[0] != 22)
            boom += 1.0;
        else    
            pass += 1.0;
    }
    document.getElementById("chance").innerHTML = Math.round(pass / 10000.0 * 100) + "%";

}

function tap()
{
    var e = document.getElementById("item");
    var item = e.value;
    
    let pass = 0.0;
    let boom = 0.0;

    let currentStar = 0;
    let failCount = 0;
    let repeat = false;

    if(item == "sos20")
        currentStar = 20;
    else if (item == "sos21")
        currentStar = 21;
    else if (item == "sosrep")
    {
        currentStar = 21;
        repeat = true;
    }

    let result = fullSend(currentStar, failCount, repeat, itemLevel[item]);
    if (result[0] != 22)
        document.getElementById("result").innerHTML = "boomed at " + result[0];
    else    
        document.getElementById("result").innerHTML = result[0];
    
    document.getElementById("cost").innerHTML = Math.round(result[1]).toLocaleString("en-US");
}

