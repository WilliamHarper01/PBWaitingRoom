const BEGINNER = -1;
const HERO = 0;
const PALADIN = 1;
const ADELE = 2;
const DARK_KNIGHT = 3;
const FIRE_POISON = 4;
const ILLIUM = 5;
const ICE_LIGHTNING = 6;
const BISHOP = 7;
const BOWMASTER = 8;
const MARKSMAN = 9;
const PATHFINDER = 10;
const NIGHTLORD = 11;
const SHADOWER = 12;
const KHALI = 13;
const DUAL_BLADE = 14;
const CORSAIR = 15;
const BUCCANEER = 16;
const ARK = 17;
const CANNON_MASTER = 18;
const DEMON_AVENGER = 19;
const KANNA = 20;
const XENON = 21;
const CLASS_LENGTH = 22;

const classDict = {
    "-none-": BEGINNER,
    "Hero": HERO,
    "Paladin": PALADIN,
    "Dark Knight": DARK_KNIGHT,
    "Fire Poison": FIRE_POISON,
    "Ice Lightning": ICE_LIGHTNING,
    "Bishop": BISHOP,
    "Bowmaster": BOWMASTER,
    "Marksman": MARKSMAN,
    "Pathfinder": PATHFINDER,
    "Night Lord": NIGHTLORD,
    "Shadower": SHADOWER,
    "Dual Blade": DUAL_BLADE,
    "Corsair": CORSAIR,
    "Buccaneer": BUCCANEER,
    "Cannon Master": CANNON_MASTER,
    "Demon Avenger": DEMON_AVENGER,
    "Kanna": KANNA,
    "Xenon": XENON,
    "Adele": ADELE,
    "Ark": ARK,
    "Illium": ILLIUM,
    "Khali": KHALI,
}

classDict[BEGINNER] = "-none-";
classDict[HERO] = "Hero";
classDict[PALADIN] = "Paladin";
classDict[DARK_KNIGHT] = "Dark Knight";
classDict[FIRE_POISON] = "Fire Poison";
classDict[ICE_LIGHTNING] = "Ice Lightning";
classDict[BISHOP] = "Bishop";
classDict[BOWMASTER] = "Bowmaster";
classDict[MARKSMAN] = "Marksman";
classDict[PATHFINDER] = "Pathfinder";
classDict[NIGHTLORD] = "Night Lord";
classDict[SHADOWER] = "Shadower";
classDict[DUAL_BLADE] = "Dual Blade";
classDict[CORSAIR] = "Corsair";
classDict[BUCCANEER] = "Buccaneer";
classDict[CANNON_MASTER] = "Cannon Master";
classDict[DEMON_AVENGER] = "Demon Avenger";
classDict[KANNA] = "Kanna";
classDict[XENON] = "Xenon";
classDict[ADELE] = "Adele";
classDict[ARK] = "Ark";
classDict[ILLIUM] = "Illium";
classDict[KHALI] = "Khali";

passiveStats = [];

passiveStats[BEGINNER] = new Array(STATS_LENGTH).fill(0);

function getJobStats(job, dse=0, dsi=0, rope=0, blink=0, dab=0, 
    dco=0, dhb=0, dmd=0, eb=0, averageIEDfromAttacks=0, averageCritDamageFromVS=0)
{
    jStats = new Array(STATS_LENGTH).fill(0)
    switch (job)
    {
        case BOWMASTER:
            jStats[FLAT_STR] = 30;
            jStats[FLAT_DEX] = 130;
            jStats[FLAT_ATTACK] = 130;
            jStats[PERCENT_ATTACK] = 25;
            if (dco >= 1)
            {
                jStats[CRIT_DAMAGE] = 32;
                jStats[IED] = addIEDSource(25, 41);
                jStats[FLAT_ATTACK] += 3;
                jStats[FLAT_DEX] += 2;
            }
            else
            {
                jStats[IED] = 55;
                jStats[CRIT_DAMAGE] = 31;
            }
            jStats[FINAL_DAMAGE] = 37.8;
            

            break;
    }

    if(dse >= 1)
        jStats[CRIT_DAMAGE] += 8;
    
    jStats[FLAT_ALL_STAT] += Math.floor(dmd/5);
    jStats[FLAT_ALL_STAT] += rope;
    jStats[FLAT_ALL_STAT] += Math.floor(dsi/5);
    jStats[FLAT_ATTACK] += blink;
    
    if (dab >= 1)
    {
        jStats[FLAT_ATTACK] += 20;
        jStats[FLAT_DEF] += 425;
        jStats[FLAT_HP] += 475;
        jStats[FLAT_MP] += 475;
    }

    jStats[FLAT_ATTACK] += eb;

    if (dhb >= 1)
    {
        jStats[PERCENT_HP] += 40;
        jStats[PERCENT_MP] += 40;
    }

    jStats[IED] = addIEDSource(jStats[IED], averageIEDfromAttacks);
    jStats[CRIT_DAMAGE] += averageCritDamageFromVS;

    return jStats;
}