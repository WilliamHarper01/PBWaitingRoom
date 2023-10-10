var symbolTab = document.getElementById("symbolsTab");

var symbolOptions = ["Vanishing Journey", "Chu Chu Island", "Lachelien", "Arcana", "Morass", "Esfera", "Cernium", "Hotel Arcus", 
                    "Odium", "Shangri-La", "Arteria", "Carcion"];

var symbolsTitle = document.createElement("div");
symbolsTitle.className = "sectionTitle";
symbolsTitle.innerHTML = "Symbols";
symbolTab.appendChild(symbolsTitle);

var symbolsSection = document.createElement("div");
symbolsSection.className = "horizontalSection";
symbolTab.appendChild(symbolsSection);

for (let i = 0; i < 12; i++)
{
    let symbolLine = document.createElement("div");
    symbolLine.id = "symbolLine" + i;
    symbolLine.className = "basicOption";
    symbolsSection.appendChild(symbolLine);

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