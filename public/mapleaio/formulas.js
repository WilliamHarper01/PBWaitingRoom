"use strict";

const BLANK = 0;

const FLAT_STR = 1;
const FLAT_DEX = 2;
const FLAT_INT = 3;
const FLAT_LUK = 4;
const FLAT_HP = 5;
const FLAT_MP = 6;
const FLAT_DEF = 7;

const PERCENT_STR = 8;
const PERCENT_DEX = 9;
const PERCENT_INT = 10;
const PERCENT_LUK = 11;
const PERCENT_HP = 12;
const PERCENT_MP = 13;
const PERCENT_DEF = 14;

const FINAL_STR = 15;
const FINAL_DEX = 16;
const FINAL_INT = 17;
const FINAL_LUK = 18;
const FINAL_HP = 19;
const FINAL_MP = 20;
const FINAL_DEF = 21;

const FLAT_ATTACK = 22;
const FINAL_ATTACK = 23;
const PERCENT_ATTACK = 24;

const DAMAGE = 25;
const BOSS_DAMAGE = 26;
const IED = 27;
const CRIT_DAMAGE = 28;
const FINAL_DAMAGE = 29;
const PERCENT_ALL_STAT = 30;
const STATS_LENGTH = 31;

const statDict = {
    "-none-":       BLANK,
    "str":          FLAT_STR,
    "dex":          FLAT_DEX,
    "int":          FLAT_INT,
    "luk":          FLAT_LUK,
    "hp":           FLAT_HP,
    "mp":           FLAT_MP,
    "def":          FLAT_DEF,
    "%str":         PERCENT_STR,
    "%int":         PERCENT_INT,
    "%dex":         PERCENT_DEX,
    "%luk":         PERCENT_LUK,
    "%hp":          PERCENT_HP,
    "%mp":          PERCENT_MP,
    "%def":         PERCENT_DEF,
    "finalstr":     FINAL_STR,
    "finalint":     FINAL_INT,
    "finaldex":     FINAL_DEX,
    "finalluk":     FINAL_LUK,
    "finalhp":      FINAL_HP,
    "finalmp":      FINAL_MP,
    "finaldef":     FINAL_DEF,
    "attack":       FLAT_ATTACK,
    "%att":         PERCENT_ATTACK,
    "finalattack":  FINAL_ATTACK,
    "%damage":      DAMAGE,
    "%bossdamage":  BOSS_DAMAGE,
    "%ied":         IED,
    "%critdamage":  CRIT_DAMAGE,
    "%finaldamage": FINAL_DAMAGE,
    "%allstat":     PERCENT_ALL_STAT,
}

statDict[BLANK] = "-none-"
statDict[FLAT_STR] = "str";
statDict[FLAT_DEX] = "dex";
statDict[FLAT_INT] = "int";
statDict[FLAT_LUK] = "luk";
statDict[FLAT_HP] = "hp";
statDict[FLAT_MP] = "mp";
statDict[FLAT_DEF] = "def";
statDict[PERCENT_STR] = "%str";
statDict[PERCENT_INT] = "%int";
statDict[PERCENT_DEX] = "%dex";
statDict[PERCENT_LUK] = "%luk";
statDict[PERCENT_HP] = "%hp";
statDict[PERCENT_MP] = "%mp";
statDict[PERCENT_DEF] = "%def";
statDict[FINAL_STR] = "finalstr";
statDict[FINAL_INT] = "finalint";
statDict[FINAL_DEX] = "finaldex";
statDict[FINAL_LUK] = "finalluk";
statDict[FINAL_HP] = "finalhp";
statDict[FINAL_MP] = "finalmp";
statDict[FINAL_DEF] = "finaldef";
statDict[FLAT_ATTACK] = "attack";
statDict[PERCENT_ATTACK] = "%att";
statDict[FINAL_ATTACK] = "finalattack";
statDict[DAMAGE] = "%damage";
statDict[BOSS_DAMAGE] = "%bossdamage";
statDict[IED] = "%ied";
statDict[CRIT_DAMAGE] = "%critdamage";
statDict[FINAL_DAMAGE] = "%finaldamage";
statDict[PERCENT_ALL_STAT] = "%allstat";

const BEGINNER = 0;
const HERO = 100;
const PALADIN = 101;
const DARK_KNIGHT = 102;
const FIRE_POISON = 200;
const ICE_LIGHTNING = 201;
const BISHOP = 202;
const BOWMASTER = 300;
const MARKSMAN = 301;
const PATHFINDER = 302;
const NIGHTLORD = 400;
const SHADOWER = 450;
const DUAL_BLADE = 451;
const CORSAIR = 500;
const BUCCANEER = 550;
const CANNON_MASTER = 551;
const DEMON_AVENGER = 600;
const KANNA = 700;
const XENON = 800;

function addIEDSource(a, b) {
    return 100.0 - (100.0 * (1.0 - a / 100.0) * (1.0 - b / 100.0));
}

class Flame {
    //structure for line is [stat, value]
    constructor(line1, line2, line3, line4, line5) {
        this.lines = [line1, line2, line3, line4, line5];
        this.name = 'test';
    }

    calculateStats() {
        
        let stats = new Array(STATS_LENGTH).fill(0);

        for (let i=0; i < this.lines.length; i++)
        {
            let stat = this.lines[i][0];
            let value = this.lines[i][1];

            stats[stat] += value;

        }

        return stats;
    }
    
}

class Potential {
    //structure for line is [stat, value]
    constructor(line1, line2, line3) {
        this.lines = [line1, line2, line3];
    }

    calculateStats() {

        let stats = new Array(STATS_LENGTH).fill(0)

        for(let i = 0; i<this.lines.length; i++)
        {
            let stat = this.lines[i][0];
            let value = this.lines[i][1];

            if (stat == IED)
                stats[IED] = addIEDSource(stats[IED], value);
            else
                stats[stat] += value;
            
        }

        return stats;
    }
}

class StarForce {
    constructor(star,  isTransposed) {
        this.star = star;
        this.isTransposed = isTransposed;
    }

    
    calculateStats(level, equipType, visibleAtt) {
        let flatMainStat = 0;
        let flatSecondaryStat = 0;
        let flatAttack = 0;

        let statInc = 7;
        if (level > 138)
            statInc = 9;
        if (level > 149)
            statInc = 11;
        if (level > 159)
            statInc = 13;
        if (level > 199)
            statInc = 15;
        if (level > 249)
            statInc = 17;

            let attInc = 7;
        if (level > 138)
            attInc = 8;
        if (level > 149)
            attInc = 9;
        if (level > 159)
            attInc = 10;
        if (level > 199)
            attInc = 12;
        if (level > 249)
            attInc = 14;

        if (equipType == "weapon") {   
            if (level < 200)
                attInc -= 1;
            else
                attInc += 2;
            
        }
        
        for (let i=1; i<=this.star; i++) {
            if (i < 6) {
                flatMainStat += 2;
                flatSecondaryStat += 2;
            }
            if (i < 16) {
                flatMainStat += 1;
                flatSecondaryStat += 1;
                
                if (equipType == "weapon")
                    flatAttack += Math.floor(visibleAtt * 0.02)

            }
            if (i >= 16) {
                if (i < 23)
                {
                    flatMainStat += statInc;
                    flatSecondaryStat += statInc;
                }
                flatAttack += attInc + (this.star - 16);
            }

            if (equipType == "glove") {
                if (star == 5 || star == 7 || star == 9 || star == 11 || star == 13 || star == 14 || star == 15)
                {
                    flatAttack += 1;
                }
            }
                
        }
        
        let stats = new Array(STATS_LENGTH).fill(0)
        stats[FLAT_STR] = flatMainStat;
        stats[FLAT_ATTACK] = flatAttack;
        stats[FLAT_DEX] = flatSecondaryStat;

        return stats;
    }
}

class Equip {
    constructor(name, starforce, potential, flame) {
        this.name = name;
        this.level = 200;

        this.stats = new Array(STATS_LENGTH).fill(0);

        this.starforce = starforce;
        this.potential = potential;
        this.flame = flame;

    }

    calculateStats() {
        let stats = new Array(STATS_LENGTH).fill(0)
        let flameStats = this.flame.calculateStats();
        let potentialStats = this.potential.calculateStats();
        let starforceStats = this.starforce.calculateStats();

        for (let i=0; i<STATS_LENGTH; i++)
        {
            if (i == IED) { 
                stats[IED] = addIEDSource(this.stats[IED], stats[IED]); 
                stats[IED] = addIEDSource(potentialStats[IED], stats[IED]);
                stats[IED] = addIEDSource(flameStats[IED], stats[IED]); 
                stats[IED] = addIEDSource(starforceStats[IED], stats[IED]);
            }
            else {
                stats[i] = this.stats[i] + flameStats[i] + potentialStats[i] + starforceStats[i];
            }
        }

        return stats;
    }


}

class LinkSkill
{
    constructor(job, level)
    {
        this.level = level;
        this.job = job;
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        if (this.job == DEMON_AVENGER)
            stats[DAMAGE] += 5 * this.level;
        else
            console.log("link skill for job " + this.job + " not implemented yet!");

        return stats;
    }
}

class Legion
{
    constructor(bossDamageSection, normalDamageSection, iedSection, critDamageSection, attackSection, 
    strSection, dexSection, intSection, lukSection, hpSection, mpSection)
    {
        this.legionBlocks = []
        this.bossDamageSection = bossDamageSection;
        this.normalDamageSection = normalDamageSection;
        this.iedSection = iedSection;
        this.critDamageSection = critDamageSection;
        this.attackSection = attackSection;
        this.strSection = strSection;
        this.dexSection = dexSection;
        this.intSection = intSection;
        this.lukSection = lukSection;
        this.hpSection = hpSection;
        this.mpSection = mpSection;
    }

    addLegionBlock(job, level)
    {
        this.legionBlocks.push([job, level]);
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        stats[BOSS_DAMAGE] += this.bossDamageSection;
        stats[NORMAL_DAMAGE] += this.normalDamageSection;
        stats[IED] += this.iedSection;
        stats[CRIT_DAMAGE] += this.critDamageSection / 2;
        stats[FLAT_ATTACK] += this.attackSection;
        stats[FLAT_STR] += this.strSection * 5;
        stats[FLAT_DEX] += this.dexSection * 5;
        stats[FLAT_INT] += this.intSection * 5;
        stats[FLAT_LUK] += this.lukSection * 5;
        stats[FLAT_HP] += this.hpSection * 500;
        stats[FLAT_MP] += this.mpSection * 500;

        for (let i=0; i<this.legionBlocks.length; i++)
        {
            let job = this.legionBlocks[0];
            let level = this.legionBlocks[1];

            if (job == DEMON_AVENGER)
                this.stats[BOSS_DAMAGE] += Math.round(1.15 * level); //1, 2, 3, 5, 6
            else
                console.log("legion block for job " + this.job + " not implemented yet!");
        }

        return stats;
    }
}

class Familiar
{
    constructor(line1, line2)
    {
        this.line1 = line1;
        this.line2 = line2;
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        stat1 = this.line1[0];
        stat2 = this.line2[0];
        value1 = this.line1[1];
        value2 = this.line2[1];

        stats[stat1] += value1;
        stats[stat2] += value2;

        return stats;
    }
}

class HyperStats
{
    constructor(finalStr, finalDex, finalInt, finalLuk, percentHP, percentMP, critDamage, 
    ied, damage, bossDamage, normalDamage, finalAttack)
    {
        this.finalStr = finalStr;
        this.finalDex = finalDex;
        this.finalInt = finalInt;
        this.finalLuk = finalLuk;
        this.percentHP = percentHP;
        this.percentMP = percentMP;
        this.critDamage = critDamage;
        this.ied = ied;
        this.damage = damage;
        this.bossDamage = bossDamage;
        this.normalDamage = normalDamage;
        this.finalAttack = finalAttack;
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        stats[FINAL_STR] = 30 * this.finalStr;
        stats[FINAL_DEX] = 30 * this.finalDex;
        stats[FINAL_INT] = 30 * this.finalInt;
        stats[FINAL_LUK] = 30 * this.finalLuk;
        stats[PERCENT_HP] = 2 * this.percentHP;
        stats[PERCENT_MP] = 2 * this.percentMP; 
        stats[CRIT_DAMAGE] = this.critDamage;
        stats[IED] = 3 * this.ied;
        stats[DAMAGE] = 3 * this.ied;
        stats[BOSS_DAMAGE] = 4 * this.bossDamage - Math.min(5, this.bossDamage); 
        stats[NORMAL_DAMAGE] = 4 * this.normalDamage - Math.min(5, this.normalDamage);
        stats[FINAL_ATTACK] = 3 * this.finalAttack;

        return stats;
    }
}

class Range {
    constructor(job) {
        this.job = job;
        
        this.weaponMultiplier = 1.75;

        this.stats = new Array(STATS_LENGTH).fill(0);
    }

    //TODO: Range calculation is off by 0.002% for some reason
    damageToBosses() {
        let classStats = this.classSpecificStats();
        let mainStat = classStats[0], secondaryStat = classStats[1], attack = classStats[2];
        
        let actualDamageRange = Math.floor(this.weaponMultiplier * (mainStat * 4 + secondaryStat) * attack / 100.0);
        let bonusDamagePercent = (1.0 + (this.stats[DAMAGE] + this.stats[BOSS_DAMAGE]) / 100.0);
        let critDamagePercent = (1.0 + (35 + this.stats[CRIT_DAMAGE]) / 100.0); //crit damage ranges from +20 to +50, so i averaged it to 35
        let finalDamagePercent = (1.0 + this.stats[FINAL_DAMAGE] / 100.0);
        return Math.floor(actualDamageRange * bonusDamagePercent * critDamagePercent * finalDamagePercent * this.calculateDefenceReduction(300));
    }

    damageToMobs() {
        let classStats = this.classSpecificStats();
        let mainStat = classStats[0], secondaryStat = classStats[1], attack = classStats[2];
        
        let actualDamageRange = Math.floor(this.weaponMultiplier * (mainStat * 4 + secondaryStat) * attack / 100.0);
        let bonusDamagePercent = (1.0 + (this.stats[DAMAGE] + this.stats[NORMAL_DAMAGE]) / 100.0);
        let critDamagePercent = (1.0 + (35 + this.stats[CRIT_DAMAGE]) / 100.0); //crit damage ranges from +20 to +50, so i averaged it to 35
        let finalDamagePercent = (1.0 + this.stats[FINAL_DAMAGE] / 100.0);
        return Math.floor(actualDamageRange * bonusDamagePercent * critDamagePercent * finalDamagePercent * this.calculateDefenceReduction(300));
    }

    inGameRange()
    {
        let classStats = this.classSpecificStats();
        let mainStat = classStats[0], secondaryStat = classStats[1], attack = classStats[2];
        
        let actualDamageRange = Math.floor(this.weaponMultiplier * (mainStat * 4 + secondaryStat) * attack / 100);
        let bonusDamagePercent = (1.0 + (this.stats[DAMAGE]) / 100.0);
        let critDamagePercent = (1.0 + (35 + this.stats[CRIT_DAMAGE]) / 100.0); //crit damage ranges from +20 to +50, so i averaged it to 35
        let finalDamagePercent = (1.0 + this.stats[FINAL_DAMAGE] / 100.0);
        return Math.floor(actualDamageRange * bonusDamagePercent * finalDamagePercent);
    }

    classSpecificStats()
    {
        let mainStat = 0, secondaryStat = 0, attack = 0;
        
        if (this.job == DEMON_AVENGER)
        {
            mainStat = this.setTotalStat(this.stats[FLAT_HP], this.stats[PERCENT_HP], this.stats[FINAL_HP]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job == KANNA)
        {
            mainStat = this.setTotalStat(this.stats[FLAT_INT], this.stats[PERCENT_INT], this.stats[FINAL_INT]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job == XENON)
        {
            mainStat = this.setTotalStat(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]) + 
                        this.setTotalStat(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]) + 
                        this.setTotalStat(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = 0;
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if ((this.job >= 100 && this.job < 200) || (this.job >= 500 && this.job < 550))
        {
            mainStat = this.setTotalStat(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= 200 && this.job < 300)
        {
            mainStat = this.setTotalStat(this.stats[FLAT_INT], this.stats[PERCENT_INT], this.stats[FINAL_INT]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if ((this.job >= 300 && this.job < 400) || (this.job >= 500 && this.job < 550))
        {
            mainStat = this.setTotalStat(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= 400 && this.job < 450)
        {
            mainStat = this.setTotalStat(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= 450 && this.job < 500)
        {
            mainStat = this.setTotalStat(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = this.setTotalStat(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]) +
                            this.setTotalStat(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR])
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }

        return [mainStat, secondaryStat, attack];
    }

    calculateDefenceReduction(pdr) {
        return Math.max(1.0 - (pdr/100.0 * (1.0 - this.stats[IED]/100.0)), 0.0);
    }

    setTotalStat(flatStat, percentStat, finalStat) {
        return Math.floor(flatStat * (1.0 + percentStat/100.0) + finalStat);
    }

    addEquip(equip) {
        let equipStats = equip.calculateStats();
        for (let i=0; i<STATS_LENGTH; i++)
        {
            if (i == IED) this.stats[i] = addIEDSource(this.stats[IED], equipStats[IED])
            else this.stats[i] += equipStats[i];
        }
    }
}

function test1()
{
    let linkSkill = new LinkSkill(BOWMASTER, 3);
    linkSkill.calculateStats();

    let flame = new Flame([FLAT_LUK, 41247], [FLAT_DEX, 9311], [IED, 99], [DAMAGE, 71]);

    let potential = new Potential([FINAL_ATTACK, 3939], [FINAL_DAMAGE, 145.03], [BLANK, 0]);
    let starforce = new StarForce(0, false);

    let equip = new Equip("testEquip", starforce, potential, flame);
    let stats = new Range(NIGHTLORD);
    stats.addEquip(equip);

    let damageToBosses = stats.inGameRange();
    
    document.getElementById("testID").innerHTML = damageToBosses;

}
