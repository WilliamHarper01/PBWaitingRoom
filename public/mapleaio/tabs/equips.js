"use strict";

const potentialValues = ['3', '4', '6', '7', '9','10', '12', '13', '20', '30', '35', '40'];

const possibleFlameStats = [BLANK, FLAT_ATTACK, FLAT_MATT, FLAT_STR, FLAT_DEX, FLAT_INT, FLAT_LUK, 
                            FLAT_HP, FLAT_MP, PERCENT_ALL_STAT, DAMAGE, BOSS_DAMAGE]

const possiblePotentialStats = [BLANK, FLAT_ATTACK, FLAT_MATT, FLAT_STR, FLAT_DEX, FLAT_INT , FLAT_LUK,
                                PERCENT_STR, PERCENT_INT, PERCENT_LUK, PERCENT_DEX, PERCENT_HP,
                                PERCENT_MP, PERCENT_DEF, PERCENT_ATTACK, PERCENT_MATT, BOSS_DAMAGE, DAMAGE, CRIT_DAMAGE, IED];

var equipSelected = WEAPON;

var equipTab = document.getElementById('equipTab');

var equipView = document.createElement('div');
equipView.className = "equipView";
equipTab.appendChild(equipView);

var blankSpaces = [2, 4, 10, 18, 24, 30, 31, 32, 34];

let imgIndex = 0;
let blankIndex = 0;

for (let i = 0; i < 36; i++)
{
    if (i == blankSpaces[blankIndex])
    {
        let imgDiv = document.createElement("div");
        imgDiv.className = "notImgDiv";
        equipView.appendChild(imgDiv);
        blankIndex++;
    }
    else
    {
        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";
        imgDiv.id = "imgDiv" + imgIndex;
        imgDiv.setAttribute("onclick", "showEquipStats(" + imgIndex + ")")
        equipView.appendChild(imgDiv);
        
        let img = document.createElement("img");
        img.src = baseEquips[equips[imgIndex].name].img.split(".png")[0] + ".png"; //remove any junk that may be after the .png
        img.id = "equipimg" + imgIndex;
        img.className = "equipimg";
        img.setAttribute("onclick", "showEquipStats(" + imgIndex + ")")
        imgDiv.appendChild(img);
        imgIndex++;
    }
}

var equipStats = document.createElement("div");
equipStats.className="verticalSection";
equipTab.appendChild(equipStats);

var equipSelection = document.createElement("div");
equipSelection.className = "verticalSection";
equipSelection.innerHTML = "Equip";
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
flameTab.innerHTML = "Flames"
flameTab.className = "verticalSection";
equipStats.appendChild(flameTab);
for (let i = 0; i < 5; i++)
{
    let flameLine = document.createElement("div");
    flameLine.id = "flameLine" + i;
    flameTab.appendChild(flameLine);

    let flameStat = document.createElement("select");
    flameStat.className = "smallOption";
    let flameValue = document.createElement("input");
    flameValue.className = "smallOption";

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
potentialTab.className = "verticalSection";
potentialTab.innerHTML = "Potential";
equipStats.appendChild(potentialTab);
for (let i = 0; i < 3; i++)
{
    let potentialLine = document.createElement("div");
    potentialLine.id = "potentialLine" + i;
    potentialTab.appendChild(potentialLine);

    let potentialStat = document.createElement("select");
    potentialStat.className = "smallOption";
    let potentialValue = document.createElement("input");
    potentialValue.className = "smallOption";

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
starforceTab.className = "verticalSection";
starforceTab.innerHTML = "StarForce";
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
    document.getElementById("imgDiv" + equipSelected).className = "imgDiv";
    
    equipSelected = id;

    document.getElementById("imgDiv" + equipSelected).className = "selectedImgDiv";

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

    let equipOptions = equipSelector.childNodes;
    for (let i=0; i<equipOptions.length; i++)
    {
        if (equipOptions[i].value == "None")
            continue;
        else
        {
            equipOptions[i].style.display = "none";
            if (equipSelected == baseEquips[equipOptions[i].value].type)
                equipOptions[i].style.display = "block";
            else if (equipSelected == 5 || equipSelected == 10 || equipSelected == 15)
            {
                if (baseEquips[equipOptions[i].value].type == RING)
                    equipOptions[i].style.display = "block";
            }
            else if (equipSelected == 0 || equipSelected == 4 || equipSelected == 9)
            {
                if (baseEquips[equipOptions[i].value].type == TOTEM)
                    equipOptions[i].style.display = "block";
            }
            else if (equipSelected == 11)
            {
                if (baseEquips[equipOptions[i].value].type == PENDANT)
                    equipOptions[i].style.display = "block";
            }
        }
    }
}

//called when the user changes the html value of one of the flame, pot, or starforce stat elements
//it gets the value from the html element, and puts it in the selected equip
function changeStat(type, part, index)
{
    if (type == "baseEquip")
    {
        equips[equipSelected].baseEquip = baseEquips[equipSelector.value]
        equips[equipSelected].name = equipSelector.value;
        document.getElementById("equipimg" + equipSelected).src = equips[equipSelected].baseEquip.img.split(".png")[0] + ".png";
    }
    if (type == "flame")
    {
        if (part == 0)
            equips[equipSelected].flame.lines[index][0] = statDict[flameTab.childNodes[index + 1].firstChild.value];
        else
            equips[equipSelected].flame.lines[index][1] = isANumber(flameTab.childNodes[index + 1].lastChild.value);
    }
    else if (type == "starforce")
        equips[equipSelected].starforce.star = isANumber(document.getElementById("starforceValue").value);
    else if (type == "potential")
    {
        if (part == 0)
            equips[equipSelected].potential.lines[index][0] = statDict[potentialTab.childNodes[index + 1].firstChild.value];
        else
            equips[equipSelected].potential.lines[index][1] = isANumber(potentialTab.childNodes[index + 1].lastChild.value);
    }

    updateRange();
}

showEquipStats(equipSelected);





