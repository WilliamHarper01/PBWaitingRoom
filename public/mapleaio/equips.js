"use strict";

const potentialValues = ['3', '4', '6', '7', '9','10', '12', '13', '20', '30', '35', '40'];

const possibleFlameStats = [BLANK, FLAT_ATTACK, FLAT_STR, FLAT_DEX, FLAT_INT, FLAT_LUK, 
                            FLAT_HP, FLAT_MP, PERCENT_ALL_STAT, DAMAGE, BOSS_DAMAGE]

const possiblePotentialStats = [BLANK, FLAT_ATTACK, FLAT_STR, FLAT_DEX, FLAT_INT , FLAT_LUK,
                                PERCENT_STR, PERCENT_INT, PERCENT_LUK, PERCENT_DEX, PERCENT_HP,
                                PERCENT_MP, PERCENT_DEF, PERCENT_ATTACK, BOSS_DAMAGE, DAMAGE, CRIT_DAMAGE, IED];

var equips = new Array(24);

for (let i = 0; i < equips.length; i++)
{
    equips[i] = new Equip("None",
        new StarForce(0, false),
        new Potential([BLANK, 0], [BLANK, 0], [BLANK, 0]),
        new Flame([BLANK, 0], [BLANK, 0], [BLANK, 0], [BLANK, 0], [BLANK, 0]));
}

var equipSelected = 0;

var equipTab = document.getElementById('equipTab');

for (let i = 0; i < equips.length; i++)
{
    let img = document.createElement("img");
    img.src = equips[equipSelected].baseEquip.img;
    img.id = "equipimg" + i;
    img.style.width = "2%";
    img.style.height = "2%";
    img.class = "equipimg";
    img.setAttribute("onclick", "showEquipStats(" + i + ")")
    equipTab.appendChild(img);
}

var equipStats = document.createElement("div");
equipStats.style.display = "none";
equipTab.appendChild(equipStats);

var equipSelection = document.createElement("div");
equipStats.appendChild(equipSelection);

var equipSelector = document.createElement("select");
equipSelector.value = "None"

for (let [key, value] of Object.entries(baseEquips))
{
    let oEquip = document.createElement("option");
    oEquip.text = key;
    oEquip.value = key;
    equipSelector.add(oEquip);
}

equipSelector.setAttribute("onchange", "changeStat('baseEquip', 0, 0)");

equipSelection.appendChild(equipSelector);

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
        let option = document.createElement("option");
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

var potentialTab = document.createElement("div");
equipStats.appendChild(potentialTab);
for (let i = 0; i < 3; i++)
{
    let potentialLine = document.createElement("div");
    potentialLine.id = "potentialLine" + i;
    potentialTab.appendChild(potentialLine);

    let potentialStat = document.createElement("select");
    let potentialValue = document.createElement("input");

    for (let j = 0; j < possiblePotentialStats.length; j++)
    {
        let oStat = possiblePotentialStats[j];
        var option = document.createElement("option");
        option.text = statDict[oStat];
        option.value = statDict[oStat];
        potentialStat.add(option);
    }

    potentialStat.setAttribute("onchange", "changeStat('potential', 0, "+ i + ")");
    potentialValue.setAttribute("onchange", "changeStat('potential', 1, "+ i + ")");
    potentialValue.value = equips[equipSelected].potential.lines[i][1];


    potentialLine.appendChild(potentialStat);
    potentialLine.appendChild(potentialValue);
}

var starforceTab = document.createElement("div");
equipStats.appendChild(starforceTab);

var starforceValue = document.createElement("select");
starforceValue.id = "starforceValue";
starforceValue.value = equips[equipSelected].starforce.star;
for (let j = 25; j >= 0; j--)
{
    var option = document.createElement("option");
    option.text = j.toString();
    option.value = j;
    starforceValue.add(option);
}
starforceValue.setAttribute("onchange", "changeStat('starforce', 0, 0)");
starforceTab.appendChild(starforceValue);


//called when we click an equip in the equip tab
//sets all the values of the flame, starforce, and pot elements to the values in the equip we just selected
function showEquipStats(id)
{
    equipStats.style.display = "block";
    equipSelected = id;

    equipSelector.value = equips[equipSelected].name;
    for(let i = 0; i<5; i++)
    {
        let flameLine = document.getElementById("flameLine" + i);
        flameLine.firstChild.value = statDict[equips[equipSelected].flame.lines[i][0]];
        flameLine.lastChild.value = equips[equipSelected].flame.lines[i][1];
    }
    for(let i = 0; i<3; i++)
    {
        let potentialLine = document.getElementById("potentialLine" + i);
        potentialLine.firstChild.value = statDict[equips[equipSelected].potential.lines[i][0]];
        potentialLine.lastChild.value = equips[equipSelected].potential.lines[i][1];
    }
    document.getElementById("starforceValue").value = equips[equipSelected].starforce.star;

}

//called when the user changes the html value of one of the flame, pot, or starforce stat elements
//it gets the value from the html element, and puts it in the selected equip
function changeStat(type, part, index)
{
    if (type == "baseEquip")
    {
        equips[equipSelected].baseEquip = baseEquips[equipSelector.value]
        equips[equipSelected].name = equipSelector.value;
        document.getElementById("equipimg" + equipSelected).src = equips[equipSelected].baseEquip.img;
    }
    if (type == "flame")
    {
        if (part == 0)
            equips[equipSelected].flame.lines[index][0] = statDict[flameTab.childNodes[index].firstChild.value];
        else
            equips[equipSelected].flame.lines[index][1] = Number(flameTab.childNodes[index].lastChild.value);
    }
    else if (type == "starforce")
        equips[equipSelected].starforce.star = Number(document.getElementById("starforceValue").value);
    else if (type == "potential")
    {
        if (part == 0)
            equips[equipSelected].potential.lines[index][0] = statDict[potentialTab.childNodes[index].firstChild.value];
        else
            equips[equipSelected].potential.lines[index][1] = Number(potentialTab.childNodes[index].lastChild.value);
    }

    updateRange();
}





