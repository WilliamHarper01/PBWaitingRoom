const BEGINNER = -1;
const HERO = 0;
const PALADIN = 1;
const DARK_KNIGHT = 2;
const DAWN_WARRIOR = 3;
const MIHILE = 4;
const BLASTER = 5;
const DEMON_SLAYER = 6;
const ARAN = 7;
const KAISER = 8;
const ADELE = 9;
const ZERO = 10;
const HAYATO = 11;

const BOWMASTER = 12;
const MARKSMAN = 13;
const PATHFINDER = 14;
const WIND_ARCHER = 15;
const WILD_HUNTER = 16;
const MERCEDES = 17;
const KAIN = 18;

const FIRE_POISON = 19;
const ICE_LIGHTNING = 20;
const BISHOP = 21;
const BLAZE_WIZARD = 22;
const BATTLE_MAGE = 23;
const LUMINOUS = 24;
const EVAN = 25;
const ILLIUM = 26;
const LARA = 27;
const KINESIS = 28;
const BEAST_TAMER = 29;

const NIGHTLORD = 30;
const SHADOWER = 31;
const DUAL_BLADE = 32;
const NIGHT_WALKER = 33;
const PHANTOM = 34;
const CADENA = 35;
const KHALI = 36;
const HOYOUNG = 37;

const CORSAIR = 38;
const BUCCANEER = 39;
const CANNON_MASTER = 40;
const THUNDER_BREAKER = 41;
const MECHANIC = 42;
const SHADE = 43;
const ANGELIC_BUSTER = 44;
const ARK = 45;
 
const DEMON_AVENGER = 46;
const KANNA = 47;
const XENON = 48;
const CLASS_LENGTH = 49;

const strJobs = [HERO, PALADIN, DARK_KNIGHT, DAWN_WARRIOR, MIHILE, BLASTER, 
    DEMON_SLAYER, ARAN, KAISER, ADELE, ZERO, HAYATO, BUCCANEER, CANNON_MASTER, THUNDER_BREAKER,
    SHADE, ARK];

const dexJobs = [BOWMASTER, MARKSMAN, PATHFINDER, WIND_ARCHER, WILD_HUNTER, 
    MERCEDES, KAIN, CORSAIR, MECHANIC, ANGELIC_BUSTER];

const intJobs = [FIRE_POISON, ICE_LIGHTNING, BISHOP, BLAZE_WIZARD, BATTLE_MAGE, 
    LUMINOUS, EVAN, ILLIUM, LARA, KINESIS, BEAST_TAMER];

const lukJobs = [NIGHTLORD, NIGHT_WALKER, PHANTOM, HOYOUNG];

const lukStrJobs = [SHADOWER, DUAL_BLADE, CADENA, KHALI];

const classDict = {
    "-none-": BEGINNER,
    "Hero": HERO,
    "Paladin": PALADIN,
    "Dark Knight": DARK_KNIGHT,
    "Dawn Warrior": DAWN_WARRIOR,
    "Mihile": MIHILE,
    "Blaster": BLASTER,
    "Demon Slayer": DEMON_SLAYER,
    "Aran": ARAN,
    "Kaiser": KAISER,
    "Zero": ZERO,
    "Hayato": HAYATO,
    "Fire Poison": FIRE_POISON,
    "Ice Lightning": ICE_LIGHTNING,
    "Bishop": BISHOP,
    "Blaze Wizard": BLAZE_WIZARD,
    "Battle Mage": BATTLE_MAGE,
    "Luminous": LUMINOUS,
    "Evan": EVAN,
    "Lara": LARA,
    "Kinesis": KINESIS,
    "Beast Tamer": BEAST_TAMER,
    "Bowmaster": BOWMASTER,
    "Marksman": MARKSMAN,
    "Pathfinder": PATHFINDER,
    "Wind Archer": WIND_ARCHER,
    "Wild Hunter": WILD_HUNTER,
    "Mercedes": MERCEDES,
    "Kain": KAIN,
    "Night Lord": NIGHTLORD,
    "Shadower": SHADOWER,
    "Dual Blade": DUAL_BLADE,
    "Night Walker": NIGHT_WALKER,
    "Phantom": PHANTOM,
    "Cadena": CADENA,
    "Ho Young": HOYOUNG,
    "Corsair": CORSAIR,
    "Buccaneer": BUCCANEER,
    "Cannon Master": CANNON_MASTER,
    "Thunder Breaker": THUNDER_BREAKER,
    "Mechanic": MECHANIC,
    "Shade": SHADE,
    "Angelic Buster": ANGELIC_BUSTER,
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
classDict[DAWN_WARRIOR] = "Dawn Warrior";
classDict[MIHILE] = "Mihile";
classDict[BLASTER] = "Blaster";
classDict[DEMON_SLAYER] = "Demon Slayer";
classDict[ARAN] = "Aran";
classDict[KAISER] = "Kaiser";
classDict[ZERO] = "Zero";
classDict[HAYATO] = "Hayato";

classDict[FIRE_POISON] = "Fire Poison";
classDict[ICE_LIGHTNING] = "Ice Lightning";
classDict[BISHOP] = "Bishop";
classDict[BLAZE_WIZARD] = "Blaze Wizard";
classDict[BATTLE_MAGE] = "Battle Mage";
classDict[LUMINOUS] = "Luminous";
classDict[EVAN] = "Evan";
classDict[LARA] = "Lara";
classDict[KINESIS] = "Kinesis";
classDict[BEAST_TAMER] = "Beast Tamer";

classDict[BOWMASTER] = "Bowmaster";
classDict[MARKSMAN] = "Marksman";
classDict[PATHFINDER] = "Pathfinder";
classDict[WIND_ARCHER] = "Wind Archer";
classDict[WILD_HUNTER] = "Wild Hunter";
classDict[MERCEDES] = "Mercedes";
classDict[KAIN] = "Kain";

classDict[NIGHTLORD] = "Night Lord";
classDict[SHADOWER] = "Shadower";
classDict[DUAL_BLADE] = "Dual Blade";
classDict[NIGHT_WALKER] = "Night Walker";
classDict[PHANTOM] = "Phantom";
classDict[CADENA] = "Cadena";
classDict[HOYOUNG] = "Ho Young";

classDict[CORSAIR] = "Corsair";
classDict[BUCCANEER] = "Buccaneer";
classDict[CANNON_MASTER] = "Cannon Master";
classDict[THUNDER_BREAKER] = "Thunder Breaker";
classDict[MECHANIC] = "Mechanic";
classDict[SHADE] = "Shade";
classDict[ANGELIC_BUSTER] = "Angelic Buster";

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