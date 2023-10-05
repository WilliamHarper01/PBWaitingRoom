var innerTab = document.getElementById("innerTab");

var innerOptions = [BLANK, BOSS_DAMAGE, DAMAGE, NORMAL_DAMAGE, FINAL_ATTACK, FINAL_STR, FINAL_DEX, FINAL_INT, FINAL_LUK,
                    SKIP_COOLDOWN, ATTACK_SPEED, CRIT_RATE, BUFF_DURATION];

var inner = new Potential([BLANK, 0], [BLANK, 0], [BLANK, 0]);

for (let i = 0; i < 3; i++)
{
    let innerLine = document.createElement("div");
    innerLine.id = "innerLine" + i;
    innerTab.appendChild(innerLine);

    let innerStat = document.createElement("select");
    let innerValue = document.createElement("input");

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


    innerLine.appendChild(innerStat);
    innerLine.appendChild(innerValue);
}

function changeInner(part, line)
{
    if (part == 0)
        inner.lines[line][0] = statDict[document.getElementById("innerLine" + line).firstChild.value];
    else
        inner.lines[line][1] = Number(document.getElementById("innerLine" + line).lastChild.value);

    updateRange();
}