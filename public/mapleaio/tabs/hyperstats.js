var hyperTab = document.getElementById("hyperTab");

var hyperOptions = ["STR", "DEX", "INT", "LUK", "HP", "MP", "CRIT DAMAGE", "IED", 
                    "DAMAGE", "BOSS DAMAGE", "NORMAL DAMAGE", "ATTACK"];

for (let i = 0; i < 12; i++)
{
    let hyperLine = document.createElement("div");
    hyperLine.id = "hyperLine" + i;
    hyperTab.appendChild(hyperLine);

    let hyperLabel = document.createElement("label");
    hyperLabel.innerHTML = hyperOptions[i];
    hyperLabel.htmlFor = "hyperLine" + i;
    hyperLine.appendChild(hyperLabel);
    
    let hyperLevel = document.createElement("select");
    for (let j = 0; j <= 15; j++)
    {
        let option = document.createElement("option");
        option.text = j;
        option.value = j;
        hyperLevel.add(option);
    }

    hyperLevel.setAttribute("onchange", "changeHyper(" + i + ")");
    hyperLevel.value = hypers.values[i];
    
    hyperLine.appendChild(hyperLevel);
}

function changeHyper(index)
{
    hypers.values[index] = isANumber(document.getElementById("hyperLine" + index).lastChild.value);
    updateRange();
}