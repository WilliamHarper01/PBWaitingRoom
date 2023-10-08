var legionTab = document.getElementById("legionTab");

var sectionNames = ["BOSS DAMAGE", "NORMAL DAMAGE", "IED", "CRIT DAMAGE", "ATTACK",
                    "STR", "DEX", "INT", "LUK", "HP", "MP"];

var legionSections = document.createElement("div");
legionTab.appendChild(legionSections);

for (let i=0; i < legion.sections.length; i++)
{
    let section = document.createElement("div");
    section.id = "section" + i;
    legionSections.appendChild(section);

    let sectionLabel = document.createElement("label");
    sectionLabel.innerHTML = sectionNames[i];
    sectionLabel.htmlfor = "section" + i;
    section.appendChild(sectionLabel);

    let sectionValue = document.createElement("select");

    for (let j = (i >= 4 ? 15 : 40); j >= 0; j--)
    {
        let option = document.createElement("option");
        option.text = j;
        option.value = j;
        sectionValue.add(option);
    }
    sectionValue.value = legion.sections[i];
    sectionValue.setAttribute("onchange", "changeSection(" + i + ")");

    section.appendChild(sectionValue);
}

var legionBlocks = document.createElement("div");
legionTab.appendChild(legionBlocks);

for (let i=0; i < legion.legionBlocks.length; i++)
{
    let block = document.createElement("div");
    block.id = "block" + i;
    legionBlocks.appendChild(block);

    let blockLabel = document.createElement("label");
    blockLabel.innerHTML = classDict[i];
    blockLabel.htmlfor = "block" + i;
    block.appendChild(blockLabel);

    let blockValue = document.createElement("select");

    for (let j = 5; j >= 0; j--)
    {
        let option = document.createElement("option");
        option.text = j;
        option.value = j;
        blockValue.add(option);
    }
    blockValue.value = legion.legionBlocks[i];
    blockValue.setAttribute("onchange", "changeBlock(" + i + ")");

    block.appendChild(blockValue);
}

function changeSection(section)
{
    legion.sections[section] = isANumber(document.getElementById("section" + section).lastChild.value);
    updateRange();
}

function changeBlock(block)
{
    legion.legionBlocks[block] = isANumber(document.getElementById("block" + block).lastChild.value);
    updateRange();
}