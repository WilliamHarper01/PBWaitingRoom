const possibleFamiliarStats = [BLANK, PERCENT_ATTACK, PERCENT_MATT, BOSS_DAMAGE, DAMAGE, CRIT_DAMAGE, IED, FLAT_ATTACK,
    FLAT_MATT, FLAT_STR, FLAT_DEX, FLAT_INT , FLAT_LUK, FLAT_ALL_STAT,
    PERCENT_STR, PERCENT_INT, PERCENT_LUK, PERCENT_DEX, PERCENT_HP,
    PERCENT_MP, PERCENT_DEF];

var badgeNames = ["apocalypse", "labrynth", "void", "ocean", "swamp", "mineral", "lion", "future"];

var familiarsTab = document.getElementById("familiarsTab");

var cardsTitle = document.createElement("div");
cardsTitle.className = "sectionTitle";
cardsTitle.innerHTML = "Cards";
familiarsTab.appendChild(cardsTitle);

var cardsSection = document.createElement("div");
cardsSection.className = "verticalSection";
familiarsTab.appendChild(cardsSection);

for (let i = 0; i<3; i++)
{
    let familiarCard = document.createElement("div");
    familiarCard.className = "horizontalSection";
    for (let j=0; j<2; j++)
    {
        let line = document.createElement("div");
        line.id = "famLine" + i + j;
        line.className = "basicOption";

        let stat = document.createElement("select");

        for (let k=0; k<possibleFamiliarStats.length; k++)
        {
            let oFam = document.createElement("option");
            oFam.text = statDict[possibleFamiliarStats[k]];
            oFam.value = statDict[possibleFamiliarStats[k]];
            stat.add(oFam);
        }

        let value = document.createElement("input");
        value.value = famLines[j].lines[i][1];
        stat.value = statDict[famLines[j].lines[i][0]];

        stat.setAttribute("onchange", "changeFam(0, "+ i + ", " + j + ")");
        value.setAttribute("onchange", "changeFam(1, "+ i + ", " + j + ")");

        line.appendChild(stat);
        line.appendChild(value);

        familiarCard.appendChild(line);
    }

    familiarsTab.appendChild(familiarCard);
}

var badgesTitle = document.createElement("div");
badgesTitle.className = "sectionTitle";
badgesTitle.innerHTML = "Badges";
familiarsTab.appendChild(badgesTitle);

var badges = document.createElement("div");
badges.className = "horizontalSection";
familiarsTab.appendChild(badges);

for (let i=0; i<famBadges.badgeList.length; i++)
{
    let badge = document.createElement("div");
    badge.id = "badge" + i;
    badges.appendChild(badge);
    badge.className = "smallOption";

    let badgeLabel = document.createElement("label");
    badgeLabel.htmlfor = "badge" + i;
    badgeLabel.innerHTML = badgeNames[i];
    badgeLabel.className = "checkLabel";

    let badgeCheck = document.createElement("input");
    badgeCheck.type = "checkbox";
    badgeCheck.setAttribute("onchange", "selectBadge(" + i + ")");
    badgeCheck.checked = famBadges.badgeList[i];

    badge.appendChild(badgeCheck);
    badge.appendChild(badgeLabel);
}

function changeFam(part, card, line)
{
    if (part == 0)
        famLines[line].lines[card][0] = statDict[document.getElementById("famLine" + card + line).firstChild.value];
    else
        famLines[line].lines[card][1] = isANumber(document.getElementById("famLine" + card + line).lastChild.value);
    updateRange();
}

function selectBadge(badge)
{
    famBadges.badgeList[badge] = document.getElementById("badge" + badge).firstChild.checked;
    updateRange();
}