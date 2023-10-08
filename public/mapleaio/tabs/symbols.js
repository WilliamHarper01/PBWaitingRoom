var symbolTab = document.getElementById("symbolsTab");

var symbolOptions = ["Vanishing Journey", "Chu Chu Island", "Lachelien", "Arcana", "Morass", "Esfera", "Cernium", "Hotel Arcus", 
                    "Odium", "Shangri-La", "Arteria", "Carcion"];

for (let i = 0; i < 12; i++)
{
    let symbolLine = document.createElement("div");
    symbolLine.id = "symbolLine" + i;
    symbolTab.appendChild(symbolLine);

    let symbolLabel = document.createElement("label");
    symbolLabel.innerHTML = symbolOptions[i];
    symbolLabel.htmlFor = "symbolLine" + i;
    symbolLine.appendChild(symbolLabel);
    
    let symbolLevel = document.createElement("select");

    let highestLevel = i < 6 ? 20 : 11;

    for (let j = 0; j <= highestLevel; j++)
    {
        let option = document.createElement("option");
        option.text = j;
        option.value = j;
        symbolLevel.add(option);
    }

    symbolLevel.setAttribute("onchange", "changeSymbols(" + i + ")");
    symbolLevel.value = symbols.values[i];
    
    symbolLine.appendChild(symbolLevel);
}

function changeSymbols(index)
{
    symbols.values[index] = isANumber(document.getElementById("symbolLine" + index).lastChild.value);
    updateRange();
}