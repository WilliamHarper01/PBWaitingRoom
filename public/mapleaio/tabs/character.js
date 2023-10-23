var commonNames = ["Decent Sharp Eyes", "Decent Speed Infusion", "Rope Lift", "Blink", "Decent Advanced Blessing",
                    "Decent Combat Orders", "Decent Hyper Body", "Decent Mystic Door", "Empress's Blessing"];

var apNames = ["STR", "DEX", "INT", "LUK", "HP", "MP"];

var characterTab = document.getElementById("characterTab");

var jobSelection = document.createElement("div");
jobSelection.className = "verticalSection";
jobSelection.innerHTML = "Job";
characterTab.appendChild(jobSelection);

var jobSelector = document.createElement("select");

for(let i=0; i<CLASS_LENGTH; i++)
{
    oJob = document.createElement("option");
    oJob.text = classDict[i];
    oJob.value = classDict[i];
    if (i == BEAST_TAMER)
        oJob.disabled = true;
    jobSelector.add(oJob);
}
jobSelector.value = classDict[job];

jobSelector.onchange = function() { job = classDict[jobSelector.value]; updateRange();};

jobSelection.appendChild(jobSelector);

var levelSelection = document.createElement("div");
levelSelection.className = "verticalSection";
levelSelection.innerHTML = "Level";
characterTab.appendChild(levelSelection);

var levelSelector = document.createElement("input");
levelSelector.value = characterLevel;
levelSelector.onchange = function() {characterLevel = isANumber(levelSelector.value); updateRange();};
levelSelection.appendChild(levelSelector);

var apTitle = document.createElement("div");
apTitle.className = "sectionTitle";
apTitle.innerHTML = "Set AP";
characterTab.appendChild(apTitle);

var apSection = document.createElement("div");
apSection.className = "horizontalSection";
characterTab.appendChild(apSection);

for (let i=0; i<ap.length; i++)
{
    let apDiv = document.createElement("div");
    apDiv.className = "basicOption";
    apSection.appendChild(apDiv);

    let apLabel = document.createElement("label");
    apLabel.innerHTML = apNames[i];
    apLabel.htmlFor = "ap" + i;
    apDiv.appendChild(apLabel);

    let apInput = document.createElement("input");
    apInput.value = ap[i];
    apInput.id = "ap" + i;
    apInput.setAttribute("onchange", "changeAP("+i+")")
    apDiv.appendChild(apInput);
}

var commonTitle = document.createElement("div");
commonTitle.className = "sectionTitle";
commonTitle.innerHTML = "Common Skills";
characterTab.appendChild(commonTitle);

var commonSkills = document.createElement("div");
commonSkills.className = "horizontalSection";
characterTab.appendChild(commonSkills);

for (let i=0; i < 9; i++)
{
    let commonDiv = document.createElement("div");
    commonDiv.className = "basicOption";
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

var specialTitle = document.createElement("div");
specialTitle.className = "sectionTitle";
specialTitle.innerHTML = "Misc";
characterTab.appendChild(specialTitle);

var specialCases = document.createElement("div");
specialCases.className = "horizontalSection";
characterTab.appendChild(specialCases);

let skillIED = document.createElement("div");
skillIED.className = "basicOption";
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
VS.className = "basicOption";
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
    updateRange();
}

function changeAP(index)
{
    ap[index] = isANumber(document.getElementById("ap"+index).value);
    updateRange();
}



