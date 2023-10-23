var innerTab = document.getElementById("innerTab");

var innerOptions = [BLANK, BOSS_DAMAGE, DAMAGE, NORMAL_DAMAGE, FINAL_ATTACK, FINAL_MATT, 
    FINAL_STR, FINAL_DEX, FINAL_INT, FINAL_LUK];

var innerTitle = document.createElement("div");
innerTitle.className = "sectionTitle";
innerTitle.innerHTML = "Inner Ability";
innerTab.appendChild(innerTitle);

var innerLines = document.createElement("div");
innerLines.className = "verticalSection";
innerTab.appendChild(innerLines);

for (let i = 0; i < 3; i++)
{
    let innerLine = document.createElement("div");
    innerLine.id = "innerLine" + i;
    innerLine.className = "horizontalSection";
    innerLines.appendChild(innerLine);

    let innerStat = document.createElement("select");
    innerStat.className = "basicOption";
    let innerValue = document.createElement("input");
    innerValue.className = "basicOption";

    for (let j = 0; j < innerOptions.length; j++)
    {
        let oStat = innerOptions[j];
        let option = document.createElement("option");
        option.text = statDict[oStat];
        option.value = statDict[oStat];
        innerStat.add(option);
    }

    innerStat.setAttribute("onchange", "changeInner(0, " + i + ")");
    innerValue.setAttribute("onchange", "changeInner(1, " + i + ")");
    innerValue.value = inner.lines[i][1];
    innerStat.value = statDict[inner.lines[i][0]];


    innerLine.appendChild(innerStat);
    innerLine.appendChild(innerValue);
}

function changeInner(part, line)
{
    if (part == 0)
        inner.lines[line][0] = statDict[document.getElementById("innerLine" + line).firstChild.value];
    else
        inner.lines[line][1] = isANumber(document.getElementById("innerLine" + line).lastChild.value);

    updateRange();
}

var eventOptions = [BOSS_DAMAGE, NORMAL_DAMAGE, IED, CRIT_DAMAGE, FLAT_ATTACK, FLAT_ALL_STAT, FLAT_HP];

var eventTitle = document.createElement("div");
eventTitle.className = "sectionTitle";
eventTitle.innerHTML = "Event Stats/Title";
innerTab.appendChild(eventTitle);

var eventLines = document.createElement("div");
eventLines.className = "horizontalSection";
innerTab.appendChild(eventLines);

for (let i=0; i<eventOptions.length; i++)
{
    var eventLine = document.createElement("div");
    eventLine.id = "eventLine" + i;
    eventLine.className = "basicOption";
    eventLines.appendChild(eventLine);

    var eventLineLabel = document.createElement("label");
    eventLineLabel.innerHTML = statDict[eventOptions[i]];
    eventLineLabel.htmlFor = "eventLine" + i;
    eventLine.appendChild(eventLineLabel);

    var eventLineValue = document.createElement("input");
    eventLineValue.value = eventStats[eventOptions[i]];
    eventLineValue.setAttribute("onchange", "changeEventStats("+i+")");
    eventLine.appendChild(eventLineValue);

}

function changeEventStats(index)
{
    eventStats[eventOptions[index]] = isANumber(document.getElementById("eventLine" + index).lastChild.value);
    updateRange();
}

const possibleSoulStats = [BLANK, FLAT_ATTACK, FLAT_STR, FLAT_DEX, FLAT_INT , FLAT_LUK, FLAT_ALL_STAT,
    PERCENT_ATTACK, BOSS_DAMAGE, IED];


var soulTitle = document.createElement("div");
soulTitle.className = "sectionTitle";
soulTitle.innerHTML = "Weapon Soul";
innerTab.appendChild(soulTitle);

var soulLine = document.createElement("div");
soulLine.className = "horizontalSection";
innerTab.appendChild(soulLine);

let soulStat = document.createElement("select");
soulStat.className = "basicOption";
let soulValue = document.createElement("input");
soulValue.className = "basicOption";

for (let j = 0; j < possibleSoulStats.length; j++)
{
    let oStat = possibleSoulStats[j];
    var option = document.createElement("option");
    option.text = statDict[oStat];
    option.value = statDict[oStat];
    soulStat.add(option);
}

soulStat.onchange = function () {weaponSoul.lines[0][0] = statDict[soulStat.value]; updateRange()};
soulValue.onchange = function () {weaponSoul.lines[0][1] = isANumber(soulValue.value); updateRange()};
soulValue.value = weaponSoul.lines[0][1];
soulStat.value = statDict[weaponSoul.lines[0][0]];


soulLine.appendChild(soulStat);
soulLine.appendChild(soulValue);

