"use strict";

const potentialValues = ['3', '4', '6', '7', '9','10', '12', '13', '20', '30', '35', '40'];

const possibleFlameStats = [BLANK, FLAT_ATTACK, FLAT_STR, FLAT_DEX, FLAT_INT, FLAT_LUK, FLAT_HP, FLAT_MP, PERCENT_ALL_STAT, DAMAGE, BOSS_DAMAGE]

var equips = new Array(24);

for (let i = 0; i < equips.length; i++)
{
    equips[i] = new Equip(" ",
        new StarForce(0, false),
        new Potential([BLANK, 0], [BLANK, 0], [BLANK, 0]),
        new Flame([FLAT_DEX, 100], [PERCENT_ALL_STAT, 6], [BLANK, 0], [BLANK, 0], [BLANK, 0]));
}

equips[0].flame.lines[0] = [FLAT_DEX, 100];
equips[0].flame.lines[1] = [PERCENT_ALL_STAT, 6];

var equipSelected = 0;

let equipTab = document.getElementById('equipTab');

for (let i = 0; i < equips.length; i++)
{
    let img = document.createElement("img");
    img.src = "../img/Eqp_Berserked.png";
    img.id = "equipimg" + i;
    img.class = "equipimg";
    img.setAttribute("onclick", "showEquipStats(" + i + ")")
    equipTab.appendChild(img);
}

var equipStats = document.createElement("div");
equipTab.appendChild(equipStats);

var flameTab = document.createElement("div");
equipStats.appendChild(flameTab);
for (let i = 0; i < 5; i++)
{
    let flameLine = document.createElement("div");
    flameLine.id = "flameLine" + i;
    flameTab.appendChild(flameLine);

    let flameStat = document.createElement("select");
    let flameValue = document.createElement("input");

    for (let j = 0; j < possibleFlameStats.length; j++)
    {
        let oStat = possibleFlameStats[j];
        var option = document.createElement("option");
        option.text = statDict[oStat];
        option.value = statDict[oStat];
        flameStat.add(option);
    }

    flameStat.setAttribute("onchange", "changeStat('flame', 0, "+ i + ")");
    flameValue.setAttribute("onchange", "changeStat('flame', 1, "+ i + ")");
    flameValue.value = equips[equipSelected].flame.lines[i][1];


    flameLine.appendChild(flameStat);
    flameLine.appendChild(flameValue);
}

var starforceTab = document.createElement("div");
equipStats.appendChild(starforceTab);

var starforceValue = document.createElement("select");
for (let j = 25; j >= 0; j--)
{
    var option = document.createElement("option");
    option.text = j.toString();
    option.value = j;
    starforceValue.add(option);
}
starforceTab.appendChild(starforceValue)



function showEquipStats(id)
{
    equipSelected = id;
    for(let i = 0; i<5; i++)
    {
        let flameLine = document.getElementById("flameLine" + i);
        flameLine.firstChild.value = statDict[equips[equipSelected].flame.lines[i][0]];
        flameLine.lastChild.value = equips[equipSelected].flame.lines[i][1];
    }
}

function showTab(id)
{
    
    
    var tab = document.getElementById(id);
    if (tab.style.display === "none") 
        tab.style.display = "block";
    else 
        tab.style.display = "none";
      
}

function changeStat(type, part, index)
{
    if (type == "flame")
    {
        console.log(flameTab.childNodes[index].lastChild.value);
        if (part == 0)
            equips[equipSelected].flame.lines[index][0] = statDict[flameTab.childNodes[index].firstChild.value];
        else
            equips[equipSelected].flame.lines[index][1] = Number(flameTab.childNodes[index].lastChild.value);
    }
}





