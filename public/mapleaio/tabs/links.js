var linkTab = document.getElementById("linkTab");

var linkTitle = document.createElement("div");
linkTitle.className = "sectionTitle";
linkTitle.innerHTML = "Link Skills";
linkTab.appendChild(linkTitle);

for (let i = 0; i < 12; i++)
{
    let linkLine = document.createElement("div");
    linkLine.className = "horizontalSection";
    linkLine.id = "linkLine" + i;
    linkTab.appendChild(linkLine);

    let linkClass = document.createElement("select");
    linkClass.className = "basicOption";
    let linkLevel = document.createElement("select");
    linkLevel.className = "basicOption";

    for (let j = -1; j < CLASS_LENGTH; j++)
    {
        let oStat = classDict[j];
        let option = document.createElement("option");
        option.text = oStat;
        option.value = oStat;
        linkClass.add(option);
    }

    for (let j = 0; j < 7; j++)
    {
        let option = document.createElement("option");
        option.text = j;
        option.value = j;
        linkLevel.add(option);
    }

    linkClass.setAttribute("onchange", "changeLink(0, " + i + ")");
    linkLevel.setAttribute("onchange", "changeLink(1, " + i + ")");
    linkLevel.value = links[i].level;
    linkClass.value = classDict[links[i].job];


    linkLine.appendChild(linkClass);
    linkLine.appendChild(linkLevel);
}

function changeLink(part, line)
{
    if (part == 0)
        links[line].job = classDict[document.getElementById("linkLine" + line).firstChild.value];
    else
        links[line].level = isANumber(document.getElementById("linkLine" + line).lastChild.value);

    updateRange();
}

