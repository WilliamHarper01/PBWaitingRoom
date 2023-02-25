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
    10.0,10.0);

const safeguard = 1.00;

function select()
{
    var e = document.getElementById("item");
    var item = e.value;
    
    let pass = 0.0;
    let boom = 0.0;

    for (let i = 0; i < 10000; i++) { 

        let currentStar = 0;
        let failCount = 0;

        if(item == "sos20")
            currentStar = 20;
        else if (item == "sos21")
            currentStar = 21;
        else if (item == "sosrep")
            currentStar = 21;

        while (true)
        {
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
                boom += 1.0;
                break;
            }
            else
            {
                if (currentStar > 10 && currentStar != 15 && currentStar != 20 && item != "sosrep")
                {
                    failCount += 1;
                    currentStar -= 1;
                }
            }

            if (currentStar >= 22)
            {
                pass += 1.0;
                break;
            }
        }
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

    if(item == "sos20")
        currentStar = 20;
    else if (item == "sos21")
        currentStar = 21;
    else if (item == "sosrep")
        currentStar = 21;

    while (true)
    {
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
            document.getElementById("result").innerHTML = "BOOMED! at " + currentStar;
            boom += 1.0;
            break;
        }
        else
        {
            if (currentStar > 10 && currentStar != 15 && currentStar != 20 && item != "sosrep")
            {
                failCount += 1;
                currentStar -= 1;
            }
        }

        if (currentStar >= 22)
        {
            document.getElementById("result").innerHTML = "22!";
            pass += 1.0;
            break;
        }
    }
    

}

