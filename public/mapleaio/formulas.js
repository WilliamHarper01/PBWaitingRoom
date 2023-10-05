"use strict";

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

    calculateStats(level, equipType, visibleAtt, branch) {
        let flatMainStat = 0;
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

        let past16Attack = [0, 1, 2, 3, 4, 5, 7, 9, 11, 13];
        let past16AttackWeapon = [-1, -1, 0, 1, 2, 3, 4, 12, 13, 14];
        
        for (let i=1; i<=this.star; i++) {
            if (i < 6) {
                flatMainStat += 2;
                if (equipType == WEAPON)
                    flatAttack += visibleAtt * 0.02
            }
            else if (i < 16) {
                flatMainStat += 3;
                
                if (equipType == WEAPON)
                    flatAttack += visibleAtt * 0.02

            }
            else
            {
                if (equipType == WEAPON)
                {
                    flatMainStat += statInc;
                    flatAttack += attInc + past16AttackWeapon[i-16];
                    if (level >= 200)
                    {
                        if (i == 16 || i == 18)
                            flatAttack += 2;
                        else if (i == 17 || i == 18 || i == 19 || i == 20 || i == 21 || i == 22)
                            flatAttack += 1;
                    }
                }
                else if (equipType == BADGE)
                {
                    flatMainStat += statInc;
                }
                else
                {
                    flatMainStat += statInc;
                    flatAttack += attInc + past16Attack[i - 16];
                }
            }
                
        }

        flatAttack = Math.floor(flatAttack);
        
        let stats = new Array(STATS_LENGTH).fill(0);

        if (level == 0)
            return stats;

        if (branch == ALL_CLASS) {
            stats[FLAT_STR] = flatMainStat;
            stats[FLAT_DEX] = flatMainStat;
            stats[FLAT_INT] = flatMainStat;
            stats[FLAT_LUK] = flatMainStat;
            stats[FLAT_ATTACK] = flatAttack;
        }
        else if (branch == WARRIOR || branch == BOWMAN || branch == PIRATE) {
            stats[FLAT_STR] = flatMainStat;
            stats[FLAT_DEX] = flatMainStat;
            stats[FLAT_ATTACK] = flatAttack;
        }
        else if (branch == MAGE) {
            stats[FLAT_INT] = flatMainStat;
            stats[FLAT_LUK] = flatMainStat;
            stats[FLAT_ATTACK] = flatAttack;
        }
        else if (branch == THEIF) {
            stats[FLAT_DEX] = flatMainStat;
            stats[FLAT_LUK] = flatMainStat;
            stats[FLAT_ATTACK] = flatAttack;
        }

        return stats;
    }
}

class Equip {
    constructor(name, starforce, potential, flame) {
        this.name = name;
        this.baseEquip = baseEquips[name];

        this.starforce = starforce;
        this.potential = potential;
        this.flame = flame;

    }

    calculateStats() {
        let stats = new Array(STATS_LENGTH).fill(0)
        let flameStats = this.flame.calculateStats();
        let potentialStats = this.potential.calculateStats();
        let starforceStats = this.starforce.calculateStats(this.baseEquip.level, 
            this.baseEquip.type, this.baseEquip.stats[FLAT_ATTACK], this.baseEquip.branch);

        for (let i=0; i<STATS_LENGTH; i++)
        {
            if (i == IED) { 
                stats[IED] = addIEDSource(this.baseEquip.stats[IED], stats[IED]); 
                stats[IED] = addIEDSource(potentialStats[IED], stats[IED]);
                stats[IED] = addIEDSource(flameStats[IED], stats[IED]); 
                stats[IED] = addIEDSource(starforceStats[IED], stats[IED]);
            }
            else {
                stats[i] = this.baseEquip.stats[i] + flameStats[i] + potentialStats[i] + starforceStats[i];
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
        this.legionBlocks = [];
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
            else if (job != 0)
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
            //TODO: demon avenger flat hp is only supposed to be halved for equips
            mainStat = this.setTotalStat(this.stats[FLAT_HP]/2, this.stats[PERCENT_HP], this.stats[FINAL_HP]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job == KANNA)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_INT], this.stats[PERCENT_INT], this.stats[FINAL_INT]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            let totalHp = this.setTotalStat(this.stats[FLAT_HP] + this.stats[FLAT_MP],
                this.stats[PERCENT_HP] + this.stats[PERCENT_MP], FINAL_HP);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], 
                this.stats[FINAL_ATTACK] + Math.max(Math.floor(totalHp/700), 500000));
        }
        if (this.job == XENON)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]) + 
                        this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]) + 
                        this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = 0;
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if ((this.job >= 100 && this.job < 200) || (this.job >= 500 && this.job < 550))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= 200 && this.job < 300)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_INT], this.stats[PERCENT_INT], this.stats[FINAL_INT]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if ((this.job >= 300 && this.job < 400) || (this.job >= 500 && this.job < 550))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= 400 && this.job < 450)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= 450 && this.job < 500)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]) +
                            this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR])
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

    setTotalStatPlusAll(flatStat, percentStat, finalStat) {
        return Math.floor((flatStat + this.stats[FLAT_ALL_STAT]) 
        * (1.0 + (percentStat + this.stats[PERCENT_ALL_STAT])/100.0) 
        + finalStat);
    }

    addStats(stats) {
        for (let i=0; i<STATS_LENGTH; i++)
        {
            if (i == IED) this.stats[i] = addIEDSource(this.stats[IED], stats[IED])
            else this.stats[i] += stats[i];
        }
    }
}

function updateRange()
{
    let stats = new Range(NIGHTLORD);
    for (let i=0; i<equips.length; i++)
    {
        stats.addStats(equips[i].calculateStats());
    }
    stats.addStats(inner.calculateStats());
    
    for (let i=0; i<links.length; i++)
    {
        stats.addStats(links[i].calculateStats());
    }

    document.getElementById("damagetobosses").innerHTML = "Damage To Bosses: " + stats.damageToBosses();
    statstext = document.getElementById("statstext");
    statstext.innerHTML = "";
    for (let i=1; i<STATS_LENGTH; i++)
    {
        statstext.innerHTML += statDict[i] + ": " + stats.stats[i] + '<br>';
    }
}
