"use strict";

function rebootStats(lvl)
{
    let rStats = new Array(STATS_LENGTH).fill(0);
    rStats[FLAT_ATTACK] += 5;
    rStats[FLAT_MATT] += 5;
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

function getAPStats(ap)
{
    let stats = new Array(STATS_LENGTH).fill(0);

    stats[FLAT_STR] = ap[0];
    stats[FLAT_DEX] = ap[1];
    stats[FLAT_INT] = ap[2];
    stats[FLAT_LUK] = ap[3];
    stats[FLAT_HP] = ap[4] * 15;
    stats[FLAT_MP] = ap[5] * 15;

    return stats;
}

function setBonuses(equips)
{
    let stats = new Array(STATS_LENGTH).fill(0);

    for (let i=0; i<SET_LENGTH; i++)
    {
        let setCount = 0;
        for (let j=0; j<equips.length; j++)
        {
            let set = baseEquips[equips[j].name].set;
            let type = baseEquips[equips[j].name].type;

            for (let k = 0; k<setBonusTable[k].length; k++)
            { 
                if (set == i && type == setBonusTable[i][k][0])
                {
                    setCount++;
                    break;
                }
            }
        }

        for (let j=0; j<= setCount; j++)
        {
            let setStats = setBonusTable[i][j][1];
            for (let k=0; k<setStats.length; k++)
            {
                stats[setStats[k][0]] += setStats[k][1];
            }
            
        }

        if (setCount != 0)
            console.log(i, setCount);
    }

    return stats;
}

function isAccessory(equipType)
{
    if (equipType == RING || equipType == POCKET || equipType == PENDANT || 
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
                    flatAttack += Math.round((visibleAtt + flatAttack) * 0.02)
            }
            else if (i < 16) {
                flatMainStat += 3;
                
                if (equipType == WEAPON)
                    flatAttack += Math.round((visibleAtt + flatAttack) * 0.02)

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
            stats[FLAT_MATT] = flatAttack;
        }
        else if (branch == WARRIOR || branch == BOWMAN || branch == PIRATE) {
            stats[FLAT_STR] = flatMainStat;
            stats[FLAT_DEX] = flatMainStat;
            stats[FLAT_ATTACK] = flatAttack;
        }
        else if (branch == MAGE) {
            stats[FLAT_INT] = flatMainStat;
            stats[FLAT_LUK] = flatMainStat;
            stats[FLAT_MATT] = flatAttack;
        }
        else if (branch == THIEF) {
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

        this.starforce = starforce;
        this.potential = potential;
        this.flame = flame;

    }

    calculateStats(job) {
        let baseEquip = baseEquips[this.name];

        let stats = new Array(STATS_LENGTH).fill(0)

        if (this.name == "None")
            return stats;

        let flameStats = this.flame.calculateStats();
        let potentialStats = this.potential.calculateStats();
        let starforceStats = this.starforce.calculateStats(baseEquip.level, 
            baseEquip.type, baseEquip.stats[FLAT_ATTACK], baseEquip.branch);

        for (let i=0; i<STATS_LENGTH; i++)
        {
            if (i == IED) { 
                stats[IED] = addIEDSource(baseEquip.stats[IED], stats[IED]); 
                stats[IED] = addIEDSource(potentialStats[IED], stats[IED]);
                stats[IED] = addIEDSource(flameStats[IED], stats[IED]); 
                stats[IED] = addIEDSource(starforceStats[IED], stats[IED]);
            }
            else {
                stats[i] = baseEquip.stats[i] + flameStats[i] + potentialStats[i] + starforceStats[i];
            }
        }

        //flora magic conversion
        if (job == ADELE)
        {
            if (baseEquip == WEAPON)
                stats[FINAL_ATTACK] += Math.floor(stats[FLAT_MATT] * 0.15);
            else if (isAccessory(baseEquip.type))
                stats[FINAL_ATTACK] += Math.floor(stats[FLAT_MATT] * 0.35);
        }
        if (job == ILLIUM)
        {
            if (baseEquip == WEAPON)
                stats[FINAL_MATT] += Math.floor(stats[FLAT_ATTACK] * 0.20);
            else if (isAccessory(baseEquip.type))
                stats[FINAL_MATT] += Math.floor(stats[FLAT_ATTACK] * 0.50);
        }
        if (job == ARK)
        {
            if (baseEquip == WEAPON)
                stats[FINAL_ATTACK] += Math.floor(stats[FLAT_MATT] * 0.10);
            else if (isAccessory(baseEquip.type))
                stats[FINAL_ATTACK] += Math.floor(stats[FLAT_MATT] * 0.25);
        }
        if (job == KHALI)
        {
            if (baseEquip == WEAPON)
                stats[FINAL_ATTACK] += Math.floor(stats[FLAT_MATT] * 0.20);
            else if (isAccessory(baseEquip.type))
                stats[FINAL_ATTACK] += Math.floor(stats[FLAT_MATT] * 0.50);
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

        if (this.level == 0)
            return stats;

        switch (this.job)
        {
            case NIGHTLORD:
            case SHADOWER:
            case DUAL_BLADE:
                stats[DAMAGE] += Math.ceil((3 * this.level) / 2.0);
                break;
            
            case ICE_LIGHTNING:
            case FIRE_POISON:
            case BISHOP:
                stats[IED] += addIEDSource(stats[IED], 3 * Math.ceil(this.level/2.0));
                stats[DAMAGE] += 3 * Math.ceil(this.level/2.0);
                break;
            
            case CORSAIR:
            case BUCCANEER:
            case CANNON_MASTER:
                stats[FLAT_ALL_STAT] += 10 + 10 * this.level;
                stats[FLAT_HP] += 175 + 175 * this.level;
                stats[FLAT_MP] += 175 + 175 * this.level;
                break;
            
            case DAWN_WARRIOR:
            case WIND_ARCHER:
            case THUNDER_BREAKER:
            case BLAZE_WIZARD:
            case NIGHT_WALKER:
                stats[FLAT_ATTACK] += 5 + 2 * this.level;
                stats[FLAT_MATT] += 5 + 2 * this.level;
                break;
            
            case DEMON_AVENGER:
                stats[DAMAGE] += 5 * this.level;
                break;
            case XENON:
                stats[PERCENT_ALL_STAT] += 5 * this.level;
                break;
            case KANNA:
                stats[DAMAGE] += 5 * this.level;
                break;
            case DEMON_SLAYER:
                stats[BOSS_DAMAGE] += (5 * this.level) + 5;
                break;
            case CADENA:
                stats[DAMAGE] += 6 * this.level;
                break;
            case ADELE:
                stats[BOSS_DAMAGE] += 2 * this.level;
                break;
            case ILLIUM:
                stats[DAMAGE] += 6 * this.level;
                break;
            case KHALI:
                stats[DAMAGE] += Math.ceil(2.5 * this.level);
                break;
            case ARK:
                stats[DAMAGE] += 6 * this.level;
                break;
            case HAYATO:
                stats[FLAT_ALL_STAT] += 5 + 10 * this.level;
                stats[FLAT_ATTACK] += 5 + 5 * this.level;
                stats[FLAT_MATT] += 5 + 5 * this.level;
                break;
            case HOYOUNG:
                stats[IED] += addIEDSource(stats[IED], 5 * this.level);
                stats[NORMAL_DAMAGE] += 4 + 5 * this.level;
                break;
            case LARA:
                stats[DAMAGE] += Math.ceil(2.5 * this.level);
                stats[NORMAL_DAMAGE] += 3 + 4 * this.level;
                break;
            case BEAST_TAMER:
                stats[BOSS_DAMAGE] += 1 + 3 * this.level;
                stats[PERCENT_HP] += 2 + 1 * this.level;
                stats[PERCENT_MP] += 2 + 1 * this.level;
                break;
            case ZERO:
                stats[IED] += addIEDSource(stats[ied], 2 * this.level);
                break;
            case KINESIS:
                stats[CRIT_DAMAGE] += 2 * this.level;
        }

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
        stats[FLAT_MATT] += this.sections[5];
        stats[FLAT_STR] += this.sections[6] * 5;
        stats[FLAT_DEX] += this.sections[7] * 5;
        stats[FLAT_INT] += this.sections[8] * 5;
        stats[FLAT_LUK] += this.sections[9] * 5;
        stats[FLAT_HP] += this.sections[10] * 500;
        stats[FLAT_MP] += this.sections[11] * 500;

        let statTable = [0, 10, 20, 40, 80, 100];
        let hpTable = [0, 2, 3, 4, 5, 6];

        for (let i=0; i<this.legionBlocks.length; i++)
        {
            
            let job = i;
            let level = this.legionBlocks[i];

            switch(job)
            {
                case DEMON_AVENGER:
                case KANNA:
                    stats[BOSS_DAMAGE] += Math.round(1.15 * level); //1, 2, 3, 5, 6
                    break;
                
                case HERO:
                case PALADIN:
                case ADELE:
                case ARK:
                case CANNON_MASTER:
                case BUCCANEER:
                case KAISER:
                case THUNDER_BREAKER:
                    stats[FINAL_STR] += statTable[level];
                    break;
                
                case BOWMASTER:
                case PATHFINDER:
                case WIND_ARCHER:
                case ANGELIC_BUSTER:
                case KAIN:
                    stats[FINAL_DEX] += statTable[level];
                    break;
                
                case ICE_LIGHTNING:
                case BISHOP:
                case ILLIUM:
                case LUMINOUS:
                case BLAZE_WIZARD:
                case BATTLE_MAGE:
                case LARA:
                case KINESIS:
                    stats[FINAL_INT] += statTable[level];
                    break;
                
                case SHADOWER:
                case DUAL_BLADE:
                case NIGHT_WALKER:
                case CADENA:
                case HOYOUNG:
                case KHALI:
                    stats[FINAL_LUK] += statTable[level];
                    break;
                
                case SHADE:
                case HAYATO:
                    stats[CRIT_DAMAGE] += Math.round(1.15 * level);
                    break;

                case BLASTER:
                case BEAST_TAMER:
                    stats[IED] = addIEDSource(stats[IED], Math.round(1.15 * level));
                    break;

                case WILD_HUNTER:
                    stats[DAMAGE] += Math.round(statTable[level]/5);
                    break;

                case MIHILE:
                    stats[FINAL_HP] += 250 * level;
                    break;

                case DARK_KNIGHT:
                    stats[PERCENT_HP] += hpTable[level];
                    break;
                case FIRE_POISON:
                    stats[PERCENT_MP] += hpTable[level];
                    break;
                case DEMON_AVENGER:
                    stats[BOSS_DAMAGE] += Math.round(1.15 * level); //1, 2, 3, 5, 6
                    break;
                case XENON:
                    stats[FINAL_STR] += statTable[level]/2;
                    stats[FINAL_DEX] += statTable[level]/2;
                    stats[FINAL_LUK] += statTable[level]/2;
                    break;
                default:
                    break;
            }
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
        if (this.badgeList[2]) {stats[PERCENT_MATT] += 1; stats[FLAT_MATT] += 2;}; //void
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
        stats[FINAL_MATT] = 3 * this.values[11];

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
            else if (dexJobs.includes(job))
            {
                stats[FINAL_DEX] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if (strJobs.includes(job))
            {
                stats[FINAL_STR] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if (intJobs.includes(job) || job == KANNA)
            {
                stats[FINAL_INT] += (this.values[i] >= 1 ? 200 : 0) + (this.values[i]) * 100;
            }
            else if (lukJobs.includes(job) || lukStrJobs.includes(job))
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
            else if (dexJobs.includes(job))
            {
                stats[FINAL_DEX] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if (strJobs.includes(job))
            {
                stats[FINAL_STR] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if (intJobs.includes(job) || job == KANNA)
            {
                stats[FINAL_INT] += (this.values[i] >= 1 ? 400 : 0) + (this.values[i]) * 200;
            }
            else if (lukJobs.includes(job) || lukStrJobs.includes(job))
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
        return Math.floor(actualDamageRange * bonusDamagePercent * 
            critDamagePercent * finalDamagePercent * this.calculateDefenceReduction(300));
    }

    damageToMobs() {
        let classStats = this.classSpecificStats();
        let mainStat = classStats[0], secondaryStat = classStats[1], attack = classStats[2];
        
        let actualDamageRange = Math.floor(this.weaponMultiplier * (mainStat * 4 + secondaryStat) * attack / 100.0);
        let bonusDamagePercent = (1.0 + (this.stats[DAMAGE] + this.stats[NORMAL_DAMAGE]) / 100.0);
        let critDamagePercent = (1.0 + (35 + this.stats[CRIT_DAMAGE]) / 100.0); //crit damage ranges from +20 to +50, so i averaged it to 35
        let finalDamagePercent = (1.0 + this.stats[FINAL_DAMAGE] / 100.0);
        return Math.floor(actualDamageRange * bonusDamagePercent * 
            critDamagePercent * finalDamagePercent * this.calculateDefenceReduction(300));
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
            attack = this.setTotalStat(this.stats[FLAT_MATT], this.stats[PERCENT_MATT], 
                this.stats[FINAL_MATT] + Math.max(Math.floor(totalHp/700), 500000));
        }
        if (this.job == XENON)
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]) + 
                        this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]) + 
                        this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = 0;
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (strJobs.includes(this.job))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (intJobs.includes(this.job))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_INT], this.stats[PERCENT_INT], this.stats[FINAL_INT]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            attack = this.setTotalStat(this.stats[FLAT_MATT], this.stats[PERCENT_MATT], this.stats[FINAL_MATT]);
        }
        if (dexJobs.includes(this.job))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_STR], this.stats[PERCENT_STR], this.stats[FINAL_STR]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (lukJobs.includes(job))
        {
            mainStat = this.setTotalStatPlusAll(this.stats[FLAT_LUK], this.stats[PERCENT_LUK], this.stats[FINAL_LUK]);
            secondaryStat = this.setTotalStatPlusAll(this.stats[FLAT_DEX], this.stats[PERCENT_DEX], this.stats[FINAL_DEX]);
            attack = this.setTotalStat(this.stats[FLAT_ATTACK], this.stats[PERCENT_ATTACK], this.stats[FINAL_ATTACK]);
        }
        if (lukStrJobs.includes(job))
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
            if (i == IED) 
                this.stats[i] = addIEDSource(this.stats[IED], stats[IED]);
            else if (i == FINAL_DAMAGE) 
                this.stats[i] = addFDSource(this.stats[FINAL_DAMAGE], stats[FINAL_DAMAGE]);
            else this.stats[i] += stats[i];
        }
    }
}
