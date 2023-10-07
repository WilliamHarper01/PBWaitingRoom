var job = BOWMASTER;
var characterLevel = 0;
var commonLevels = new Array(9).fill(0);
var commonNames = ["Decent Sharp Eyes", "Decent Speed Infusion", "Rope Lift", "Blink", "Decent Advanced Blessing",
                    "Decent Combat Orders", "Decent Hyper Body", "Decent Mystic Door", "Empress's Blessing"];

var skillIEDValue = 0;
var VSValue = 0;

var characterTab = document.getElementById("characterTab");

var jobSelection = document.createElement("div");
characterTab.appendChild(jobSelection);

var jobSelector = document.createElement("select");

for(let i=0; i<CLASS_LENGTH; i++)
{
    oJob = document.createElement("option");
    oJob.text = classDict[i];
    oJob.value = classDict[i];
    jobSelector.add(oJob);
}
jobSelector.value = classDict[job];

jobSelector.onchange = function() { job = classDict[jobSelector.value]; updateRange();};

jobSelection.appendChild(jobSelector);

var levelSelection = document.createElement("div");
characterTab.appendChild(levelSelection);

var levelSelector = document.createElement("input");
levelSelector.value = characterLevel;
levelSelector.onchange = function() {characterLevel = isANumber(levelSelector.value); updateRange();};
levelSelection.appendChild(levelSelector);

var commonSkills = document.createElement("div");
characterTab.appendChild(commonSkills);

for (let i=0; i < 9; i++)
{
    let commonDiv = document.createElement("div");
    commonSkills.appendChild(commonDiv);

    let commonLabel = document.createElement("label");
    commonLabel.innerHTML = commonNames[i];
    commonLabel.htmlFor = "common" + i;
    commonDiv.appendChild(commonLabel);

    let dseInput = document.createElement("input");
    dseInput.value = commonLevels[i];
    dseInput.id = "common" + i;
    dseInput.setAttribute("onchange", "changeCommonSkill("+i+")")
    commonDiv.appendChild(dseInput);
}

var specialCases = document.createElement("div");
characterTab.appendChild(specialCases);

let skillIED = document.createElement("div");
specialCases.appendChild(skillIED);

let skillIEDLabel = document.createElement("label");
skillIEDLabel.innerHTML = "Average IED from Attacks";
skillIEDLabel.htmlFor = "skillIED";
skillIED.appendChild(skillIEDLabel);

let skillIEDInput = document.createElement("input");
skillIEDInput.value = skillIEDValue;
skillIEDInput.id = "skillIED";
skillIEDInput.onchange = function () {skillIEDValue = isANumber(skillIEDInput.value); updateRange();};
skillIED.appendChild(skillIEDInput);

let VS = document.createElement("div");
specialCases.appendChild(VS);

let VSLabel = document.createElement("label");
VSLabel.innerHTML = "Average Crit Damage from Vicious Shot";
VSLabel.htmlFor = "VS";
VS.appendChild(VSLabel);

let VSInput = document.createElement("input");
VSInput.value = VSValue;
VSInput.id = "VS";
VSInput.onchange = function () {VSValue = isANumber(VSInput.value); updateRange();};
VS.appendChild(VSInput);



function changeCommonSkill(index)
{
    commonLevels[index] = isANumber(document.getElementById("common"+index).value);
    console.log(commonLevels[index]);
    updateRange();
}



