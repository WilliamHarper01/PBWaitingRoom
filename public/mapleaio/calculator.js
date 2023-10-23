"use strict";

var unsavedChanges = false;

var job = BOWMASTER;
var characterLevel = 0;
var commonLevels = new Array(9).fill(0);
var skillIEDValue = 0;
var VSValue = 0;

var equips = new Array(27);

for (let i = 0; i < equips.length; i++)
{
    equips[i] = new Equip("None",
        new StarForce(0, false),
        new Potential([BLANK, 0], [BLANK, 0], [BLANK, 0]),
        new Flame([BLANK, 0], [BLANK, 0], [BLANK, 0], [BLANK, 0], [BLANK, 0]));
}

var famLines = new Array(2);
famLines[0] = new Potential([BLANK, 0],[BLANK, 0],[BLANK, 0]);
famLines[1] = new Potential([BLANK, 0],[BLANK, 0],[BLANK, 0]);

var famBadges = new FamiliarBadges(new Array(8).fill(false));

var hypers = new HyperStats(new Array(12).fill(0));

var weaponSoul = new Potential([BLANK, 0], [FLAT_ATTACK, 20], [FLAT_MATT, 0]);
var inner = new Potential([BLANK, 0], [BLANK, 0], [BLANK, 0]);
var eventStats = new Array(STATS_LENGTH).fill(0);

var legion = new Legion(new Array(12).fill(0));
for (let i=0; i<CLASS_LENGTH; i++)
{
    legion.legionBlocks[i] = 0;
}

var links = new Array(13);
for (let i = 0; i < 13; i++)
{
    links[i] = new LinkSkill(BEGINNER, 0);
}

var symbols = new Symbols(new Array(12).fill(0));

var ap = new Array(6).fill(4);

var statstext = document.getElementById("statstext");
for (let i=1; i<STATS_LENGTH; i++)
{
    let statText = document.createElement("li");
    statText.className = "advancedInfoStat";
    statstext.appendChild(statText);
}

var statEquivalenceList = document.getElementById("statEquivalence");
var statEquivalenceStats = [FLAT_STR, FLAT_DEX, FLAT_INT, FLAT_LUK, FLAT_HP, FLAT_MP, 
                            PERCENT_STR, PERCENT_DEX, PERCENT_INT, PERCENT_LUK, PERCENT_HP, PERCENT_MP, 
                            FLAT_ALL_STAT, PERCENT_ALL_STAT,
                            FLAT_ATTACK, PERCENT_ATTACK, FLAT_MATT, PERCENT_MATT, BOSS_DAMAGE, CRIT_DAMAGE, IED];

for (let i=0; i<statEquivalenceStats.length; i++)
{
    let statText = document.createElement("li");
    statText.className = "advancedInfoStat";
    statEquivalenceList.appendChild(statText);
}


function loadFromJSON(json)
{
    job = json["job"];
    VSValue = json["VSValue"];
    characterLevel = json["characterLevel"];
    commonLevels = json["commonLevels"];
    skillIEDValue = json["skillIEDValue"];

    for (let i=0; i<equips.length; i++)
    {
        let e = json["equips"][i];
        let s = e["starforce"];
        let p = e["potential"]["lines"];
        let f = e["flame"]["lines"];
        equips[i] = new Equip(e["name"],
                        new StarForce(s["star"], s["isTransposed"]),
                        new Potential(p[0], p[1], p[2]),
                        new Flame(f[0], f[1], f[2], f[3], f[4]));
    }

    for (let i=0; i<links.length; i++)
    {
        links[i] = new LinkSkill(json["links"][i]["job"], json["links"][i]["level"]);
    }

    legion.sections = json["legion"]["sections"];
    for (let i=0; i<legion.legionBlocks.length; i++)
        legion.legionBlocks[i] = json["legion"]["legionBlocks"][i];

    hypers.values = json["hypers"]["values"];
    symbols.values = json["symbols"]["values"];

    famLines[0].lines = json["famLines"][0]["lines"];
    famLines[1].lines = json["famLines"][1]["lines"];
    famBadges.badgeList = json["famBadges"]["badgeList"]; 

    inner.lines = json["inner"]["lines"];
    eventStats = json["eventStats"];
    weaponSoul.lines = json["weaponSoul"]["lines"];

    ap = json["ap"];
}

var lastRange = 0;

function updateRange(saveLast = false)
{
    let stats = new Range(job);

    stats.addStats(getAPStats(ap));

    stats.addStats(rebootStats(characterLevel));

    stats.addStats(getJobStats(job, commonLevels[5], characterLevel, 
                            baseEquips[equips[WEAPON].name].subType));

    stats.addStats(calculateCommons(commonLevels[0], commonLevels[1],
        commonLevels[2],
        commonLevels[3],
        commonLevels[4],
        commonLevels[6],
        commonLevels[7],
        commonLevels[8],
        skillIEDValue,
        VSValue));

    for (let i=0; i<equips.length; i++)
    {
        stats.addStats(equips[i].calculateStats(job));
    }
    stats.addStats(setBonuses(equips));

    stats.addStats(inner.calculateStats());
    
    for (let i=0; i<links.length; i++)
    {
        stats.addStats(links[i].calculateStats());
    }

    stats.addStats(legion.calculateStats());

    stats.addStats(hypers.calculateStats());
    stats.addStats(symbols.calculateStats(job));

    stats.addStats(famLines[0].calculateStats());
    stats.addStats(famLines[1].calculateStats());
    stats.addStats(famBadges.calculateStats());

    stats.addStats(eventStats);
    stats.addStats(weaponSoul.calculateStats());

    let damageToBosses = stats.damageToBosses();

    document.getElementById("damagetobosses").innerHTML = "Damage To Bosses: " + damageToBosses;

    let fdGain = (lastRange > 0) ? ((damageToBosses / lastRange) - 1.0) * 100 : 0;

    document.getElementById("fdGain").innerHTML = "FD Gain: " + fdGain.toFixed(2) + "%";

    if (saveLast)
        lastRange = damageToBosses;

    statEquivalence(stats, damageToBosses);

    let statslist = statstext.childNodes;

    for (let i=0; i<statslist.length; i++)
        statslist[i].innerHTML = statDict[i] + ": " + stats.stats[i];

    unsavedChanges = true;
}

function statEquivalence(stats, baseRange)
{
    let addSingleStat = new Array(STATS_LENGTH).fill(0);
    let statTexts = statEquivalenceList.childNodes;
    for (let i=0; i<statTexts.length; i++)
    {
        addSingleStat[statEquivalenceStats[i]] += 1;
        stats.addStats(addSingleStat);
        let fdGain = (baseRange > 0) ? ((stats.damageToBosses() / baseRange) - 1.0) * 100 : 0;
        statTexts[i].innerHTML = statDict[statEquivalenceStats[i]] + ": " + fdGain.toFixed(3) + "% ";
        addSingleStat[statEquivalenceStats[i]] -= 2;
        stats.addStats(addSingleStat);
        addSingleStat[statEquivalenceStats[i]] = 0;

    }
}