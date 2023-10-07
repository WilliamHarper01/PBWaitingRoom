"use strict";

function rebootStats(lvl)
{
    let rStats = new Array(STATS_LENGTH).fill(0);
    rStats[FLAT_ATTACK] += 5;
    rStats[FLAT_HP] += 200;
    rStats[FLAT_MP] += 100;

    if (lvl >= 300)
        rStats[FINAL_DAMAGE] = 70;
    else if (lvl >= 250)
        rStats[FINAL_DAMAGE] = 65;
    else if (lvl >= 200)
        rStats[FINAL_DAMAGE] = 60;
    else if (lvl >= 150)
        rStats[FINAL_DAMAGE] = 50;
    else if (lvl >= 100)
        rStats[FINAL_DAMAGE] = 40;
    else
        rStats[FINAL_DAMAGE] = 30;

    return rStats;
}

function setBonuses(equips)
{
    let stats = new Array(STATS_LENGTH).fill(0);

    let sets = new Array(SET_LENGTH);
    for (let i=0; i<sets.length; i++)
        sets[i] = [];

    let luckies = [];

    for (let i=0; i<equips.length; i++)
    {
        let set = equips[i].baseEquip.set;
        switch(set)
        {
            case NO_SET:
                break;
            case LUCKY:
                luckies.push(equips[i].baseEquip.type);
                break;
            default:
                sets[set].push(equips[i].baseEquip.type);
                break;
        }
    }

    for (let i=0; i<sets.length; i++)
    {
        if (sets[i].length >= 3)
        {
            for (let j=0; j<luckies.length; j++)
            {
                if (isLuckyInSet(i, luckies[j]))
                    sets[i].push(luckies[j]);
            }
        }

        //remove item from set if we have another item in the same slot and set (no double gollux pendant)
        sets[i] = [...new Set(sets[i])];

        for (let j=1; j<=sets[i].length; j++)
        {
            let setBonusEntry = setBonusTable[i][j][1];
            for (let k=0; k<setBonusEntry.length; k++)
                stats[setBonusEntry[k][0]] += setBonusEntry[k][1];
        }
    }

    return stats;
}

function isAccessory(equipType)
{
    if (equipType == RING || equipTYPE == POCKET || equipType == PENDANT || 
        equipType == BELT || equipType == FACE_ACCESSORY || equipType == EYE_ACCESSORY || equipType == EARRINGS
        || equipType == EMBLEM || equipType == MEDAL || equipType == BADGE || equipType == HEART)
    {return true;}

    return false;
}

function isLuckyInSet(index, lucky)
{
    for (let i=0; i<setBonusTable[index].length; i++)
    {
        if (setBonusTable[index][i][0] == lucky)
            return true;
    }
    return false;
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

    calculateStats(job) {
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

        //flora magic conversion
        if (job == ADELE)
        {
            if (this.baseEquip == WEAPON)
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.15;
            else if (isAccessory(this.baseEquip.type))
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.35;
        }
        if (job == ILLIUM)
        {
            if (this.baseEquip == WEAPON)
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.20;
            else if (isAccessory(this.baseEquip.type))
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.50;
        }
        if (job == ARK)
        {
            if (this.baseEquip == WEAPON)
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.10;
            else if (isAccessory(this.baseEquip.type))
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.25;
        }
        if (job == KHALI)
        {
            if (this.baseEquip == WEAPON)
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.20;
            else if (isAccessory(this.baseEquip.type))
                stats[FINAL_ATTACK] += stats[FLAT_ATTACK] * 0.50;
        }

        //DEMON AVENGER HP

        if (job == DEMON_AVENGER)
        {
            stats[FLAT_HP] = Math.floor(stats[FLAT_HP] / 2);
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
        else if (this.job == BOWMASTER)
            return stats;
        else if (this.job == BEGINNER)
            return stats;
        else
            console.log("link skill for job " + this.job + " not implemented yet!");

        return stats;
    }
}

class Legion
{
    constructor(sections)
    {
        this.legionBlocks = new Array(CLASS_LENGTH);
        this.sections = sections;
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        stats[BOSS_DAMAGE] += this.sections[0];
        stats[NORMAL_DAMAGE] += this.sections[1];
        stats[IED] += this.sections[2];
        stats[CRIT_DAMAGE] += this.sections[3] / 2;
        stats[FLAT_ATTACK] += this.sections[4];
        stats[FLAT_STR] += this.sections[5] * 5;
        stats[FLAT_DEX] += this.sections[6] * 5;
        stats[FLAT_INT] += this.sections[7] * 5;
        stats[FLAT_LUK] += this.sections[8] * 5;
        stats[FLAT_HP] += this.sections[9] * 500;
        stats[FLAT_MP] += this.sections[10] * 500;

        for (let i=0; i<this.legionBlocks.length; i++)
        {
            
            let job = i;
            let level = this.legionBlocks[i];

            if (job == DEMON_AVENGER)
                stats[BOSS_DAMAGE] += Math.round(1.15 * level); //1, 2, 3, 5, 6
            else if (level != 0)
                console.log("legion block for " + classDict[job] + " is not implemented yet");
        }

        return stats;
    }
}

class FamiliarBadges
{
    constructor(badgeList)
    {
        this.badgeList = badgeList;
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        if (this.badgeList[0]) {stats[PERCENT_ATTACK] += 1; stats[FLAT_ATTACK] += 2;}; //apocalypse
        if (this.badgeList[1]) {stats[PERCENT_ALL_STAT] += 1; stats[DAMAGE] += 1;}; //lab
        if (this.badgeList[2]) {stats[PERCENT_ATTACK] += 1; stats[FLAT_ATTACK] += 2;}; //void
        if (this.badgeList[3]) {stats[DAMAGE] += 1;}; //ocean
        if (this.badgeList[4]) {stats[PERCENT_ALL_STAT] += 1; stats[FLAT_ATTACK] += 2;}; //swamp
        if (this.badgeList[5]) {stats[IED] += 3;}; //mineral
        if (this.badgeList[6]) {stats[PERCENT_ATTACK] += 1; stats[PERCENT_HP] += 1;}; //lion
        if (this.badgeList[7]) {stats[PERCENT_ATTACK] += 1;}; //future


        return stats;
    }
}

class HyperStats
{
    constructor(values)
    {
        this.values = values;
    }

    calculateStats()
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        stats[FINAL_STR] = 30 * this.values[0];
        stats[FINAL_DEX] = 30 * this.values[1];
        stats[FINAL_INT] = 30 * this.values[2];
        stats[FINAL_LUK] = 30 * this.values[3];
        stats[PERCENT_HP] = 2 * this.values[4];
        stats[PERCENT_MP] = 2 * this.values[5]; 
        stats[CRIT_DAMAGE] = this.values[6];
        stats[IED] = 3 * this.values[7];
        stats[DAMAGE] = 3 * this.values[8];
        stats[BOSS_DAMAGE] = 4 * this.values[9] - Math.min(5, this.values[9]); 
        stats[NORMAL_DAMAGE] = 4 * this.values[10] - Math.min(5, this.values[10]);
        stats[FINAL_ATTACK] = 3 * this.values[11];

        return stats;
    }
}

class Symbols
{
    constructor(values)
    {
        this.values = values;
    }

    calculateStats(job)
    {
        let stats = new Array(STATS_LENGTH).fill(0);

        for (let i=0; i<6; i++)
        {
            if (job == XENON)
            {
                stats[FINAL_STR] += (this.values[i] >= 1 ? 96 : 0) + (this.values[i]) * 48;
                stats[FINAL_DEX] += (this.values[i] >= 1 ? 96 : 0) + (this.values[i]) * 48;
                stats[FINAL_LUK] += (this.values[i] >= 1 ? 96 : 0) + (this.values[i]) * 48;
            }
            else if (job == DEMON_AVENGER)
            {
                stats[FINAL_HP] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if ((job >= BOWMASTER && job <= PATHFINDER) || job == CORSAIR)
            {
                stats[FINAL_DEX] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if ((job >= HERO && job <= DARK_KNIGHT) || job == BUCCANEER || job == CANNON_MASTER)
            {
                stats[FINAL_STR] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if ((job >= FIRE_POISON && job <= BISHOP) || job == KANNA)
            {
                stats[FINAL_INT] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if (job >= NIGHTLORD && job <= DUAL_BLADE)
            {
                stats[FINAL_LUK] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else
            {
                console.log("job wasn't included in the symbol calculation");
            }

        }
        for (let i=6; i<12; i++)
        {
            if (job == XENON)
            {
                stats[FINAL_STR] += (this.values[i] >= 1 ? 144 : 0) + (this.values[i]) * 96;
                stats[FINAL_DEX] += (this.values[i] >= 1 ? 144 : 0) + (this.values[i]) * 96;
                stats[FINAL_LUK] += (this.values[i] >= 1 ? 144 : 0) + (this.values[i]) * 96;
            }
            else if (job == DEMON_AVENGER)
            {
                stats[FINAL_HP] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if ((job >= BOWMASTER && job <= PATHFINDER) || job == CORSAIR)
            {
                stats[FINAL_DEX] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if ((job >= HERO && job <= DARK_KNIGHT) || job == BUCCANEER || job == CANNON_MASTER)
            {
                stats[FINAL_STR] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if ((job >= FIRE_POISON && job <= BISHOP) || job == KANNA)
            {
                stats[FINAL_INT] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if (job >= NIGHTLORD && job <= DUAL_BLADE)
            {
                stats[FINAL_LUK] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else
            {
                console.log("job wasn't included in the symbol calculation");
            }
        }

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
            mainStat = this.setTotalStat(this.stats[FLAT_HP], this.stats[PERCENT_HP], this.stats[FINAL_HP]);
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
        if ((this.job >= HERO && this.job <= DARK_KNIGHT) || (this.job >= BUCCANEER && this.job <= CANNON_MASTER))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= FIRE_POISON && this.job <= BISHOP)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_INT], this.stats[PERCENT_INT], this.stats[FINAL_INT]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if ((this.job >= BOWMASTER && this.job <= PATHFINDER) || (this.job >= CORSAIR && this.job < CORSAIR))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= NIGHTLORD && this.job < NIGHTLORD)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (this.job >= SHADOWER && this.job < DUAL_BLADE)
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

    stats.addStats(rebootStats(characterLevel));

    stats.addStats(getJobStats(job, commonLevels[0],
        commonLevels[1],
        commonLevels[2],
        commonLevels[3],
        commonLevels[4],
        commonLevels[5],
        commonLevels[6],
        commonLevels[7],
        commonLevels[8],));

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

    document.getElementById("damagetobosses").innerHTML = "Damage To Bosses: " + stats.damageToBosses();
    statstext = document.getElementById("statstext");
    statstext.innerHTML = "";
    for (let i=1; i<STATS_LENGTH; i++)
    {
        statstext.innerHTML += statDict[i] + ": " + stats.stats[i] + '<br>';
    }
}
