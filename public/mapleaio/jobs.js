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
    dco=0, dhb=0, dmd=0, eb=0, averageIEDfromAttacks=0, averageCritDamageFromVS=0, level)
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

        case MARKSMAN:
            jStats[FLAT_DEX] = 20 + 30 + 80 + (2 * Math.min(dco, 1));
            jStats[FLAT_STR] = 30;
            jStats[FLAT_ATTACK] = 30 + 30 + Math.min(1, dco);
            jStats[FINAL_DAMAGE] = addFDSource(addFDSource(20, 10 + Math.min(1, dco)), addFDSource(8, 15 + Math.min(1, dco)));
            jStats[CRIT_DAMAGE] = 20 + 15 + (15 + Math.min(1, dco)) + 15;
            jStats[DAMAGE] = 2;
            jStats[PERCENT_HP] = 40;
            jStats[IED] = addIEDSource(25, addIEDSource(20, 30 + Math.min(1, dco)));
            jStats[DAMAGE] = 15;
            break;
        
        case PATHFINDER:
            jStats[FLAT_STR] = 30
            jStats[FLAT_DEX] = 20 + 30 + (2 * Math.min(1, dco));
            jStats[FLAT_ATTACK] = 30 + 60 + (2 * Math.min(1, dco));
            jStats[PERCENT_HP] = 50;
            jStats[FINAL_DAMAGE] = 20;
            jStats[IED] = 30;
            jStats[CRIT_DAMAGE] = 20 + 15 + (2*Math.min(1, dco)); //curseweaver
            jStats[PERCENT_ATTACK] = 20 + Math.min(1, dco);
            jStats[BOSS_DAMAGE] = 50 + Math.min(1, dco);
            break;
        
        case WIND_ARCHER:
            jStats[DAMAGE] = 10 + 25;
            jStats[FLAT_ATTACK] = 20 + 6 + 20 + 20 + 15 + 30 + 30 + (2*Math.min(1, dco));
            jStats[FLAT_DEX] = level/2 + 20 + 20;
            jStats[FLAT_STR] = 30
            jStats[PERCENT_ATTACK] = 10;
            jStats[PERCENT_MATT] = 10;
            jStats[FINAL_DAMAGE] = addFDSource(10, 35 + Math.min(1, dco));
            jStats[FLAT_HP] = 1500;
            jStats[CRIT_DAMAGE] = (15 + Math.min(1, dco)) + 20;
            jStats[BOSS_DAMAGE] = 40 + Math.min(1, dco);
            jStats[IED] = 15;
            break;
        
        case WILD_HUNTER:
            jStats[FLAT_ATTACK] = 20 + 20 + 10 + Math.min(1, dco);
            jStats[DAMAGE] = 10;
            jStats[PERCENT_ATTACK] = 10 + 20 + 5;
            jStats[PERCENT_MP] = 15;
            jStats[PERCENT_HP] = 20 + 50 + 10;
            jStats[FLAT_DEX] = 30 + 20 + 40;
            jStats[FLAT_STR] = 30;
            jStats[FINAL_DAMAGE] = addFDSource(10, 20);
            jStats[CRIT_DAMAGE] = 12 + 15 + (2*Math.min(1, dco));
            jStats[BOSS_DAMAGE] = 10;
            jStats[FLAT_ALL_STAT] = 60 + (2*Math.min(1, dco));
            jStats[IED] = 30 + (3*Math.min(1, dco));
            break;
        
        case MERCEDES:
            jStats[NORMAL_DAMAGE] = 10;
            jStats[FLAT_DEX] = 50;
            jStats[FLAT_STR] = 30;
            jStats[DAMAGE] = 30;
            jStats[FLAT_ATTACK] = 40 + Math.min(dco, 1);
            jStats[FINAL_DAMAGE] = addFDSource(25, 20 + Math.min(dco, 1));
            jStats[PERCENT_ATTACK] = 30 + Math.min(dco, 1);
            jStats[CRIT_DAMAGE] = 10 + Math.min(dco, 1) + 20;
            jStats[IED] = addIEDSource(25 + Math.min(dco, 1), 50 + Math.min(dco, 1));
            jStats[BOSS_DAMAGE] = 20;
            break;
        
        case KAIN:
            jStats[FLAT_ATTACK] = 40 + 40 + 40 + 30 + Math.min(1, dco);
            jStats[PERCENT_HP] = 15;
            jStats[FLAT_DEX] = 60;
            jStats[FINAL_DAMAGE] = addFDSource(addFDSource(24, 20), 30 + Math.min(1, dco));
            jStats[CRIT_DAMAGE] = 20 + Math.min(dco, 1) + 20;
            jStats[IED] = addIEDSource(10, 30 + Math.min(1, dco));
            break;

        case NIGHTLORD:
            jStats[NORMAL_DAMAGE] = 0;
            jStats[FLAT_LUK] = 20 + 20 + 30;
            jStats[FLAT_DEX] = 30;
            jStats[DAMAGE] = 0;
            jStats[FLAT_ATTACK] = 10 + 20 + 30 + Math.min(dco, 1) + 50;
            jStats[FINAL_DAMAGE] = addFDSource(25, 8);
            jStats[PERCENT_ATTACK] = 0;
            jStats[CRIT_DAMAGE] = 5 + 10 + 15;
            jStats[IED] = addIEDSource(30 + Math.min(dco, 1), Math.min(dco, 1) + 30);
            jStats[BOSS_DAMAGE] = 10 + Math.min(dco, 1);
            jStats[PERCENT_HP] = 20;
            break;
        
        case SHADOWER:
            jStats[FLAT_LUK] = 20 + 20 + 30 + 10;
            jStats[FLAT_DEX] = 30;
            jStats[DAMAGE] = 5;
            jStats[FLAT_ATTACK] = 30 + 30 + 15 + 25 + 40 + 3*Math.min(dco, 1);
            jStats[FINAL_DAMAGE] = addFDSource(25, 15 + Math.min(dco, 1));
            jStats[PERCENT_ATTACK] = 
            jStats[CRIT_DAMAGE] = 5 + 20 + 15;
            jStats[IED] = 20 + Math.min(dco, 1);
            jStats[PERCENT_HP] = 20;
            break;

        case DUAL_BLADE:
            jStats[FLAT_LUK] = 20 + 30;
            jStats[FLAT_DEX] = 30;
            jStats[FLAT_ATTACK] = 2*Math.min(dco, 1) + 30 + 30;
            jStats[FINAL_DAMAGE] = 40 + Math.min(dco, 1);
            jStats[CRIT_DAMAGE] = Math.min(dco, 1) + 13;
            jStats[PERCENT_HP] = 20;
            break;
        
        case NIGHT_WALKER:
            jStats[DAMAGE] = 10 + 30;
            jStats[FLAT_ATTACK] = 25 + 6 + 20 + 10 + 30 + 30 + (2*Math.min(1, dco));
            jStats[FLAT_LUK] = level/2 + 20 + 60;
            jStats[FLAT_DEX] = 0;
            jStats[PERCENT_ATTACK] = 10;
            jStats[PERCENT_MATT] = 10;
            jStats[FINAL_DAMAGE] = addFDSource(20, 8);
            jStats[FLAT_HP] = 1500;
            jStats[CRIT_DAMAGE] = 10 + Math.min(1, dco);
            jStats[BOSS_DAMAGE] = 40 + Math.min(1, dco);
            jStats[IED] = addIEDSource(15 + Math.min(1, dco));
            break;
        
        case PHANTOM:
            jStats[FLAT_DEX] = 40;
            jStats[FLAT_LUK] = 60 + 20;
            jStats[FLAT_ATTACK] = 40 + 40 + Math.min(1, dco);
            jStats[FINAL_DAMAGE] = addFDSource(25, 30);
            jStats[DAMAGE] = Math.min(1, dco) + 30;
            jStats[IED] =  Math.min(1, dco) + 30;
            jStats[CRIT_DAMAGE] = 15;
            break;
        
        case CADENA:
            jStats[FLAT_LUK] = 50 + 30;
            jStats[FLAT_DEX] = 30;
            jStats[CRIT_DAMAGE] = 5;
            jStats[FLAT_ATTACK] = 10 + 30 + Math.min(1, dco);
            jStats[IED] = addIEDSource(30, 20);
            jStats[PERCENT_HP] = 20;
            jStats[CRIT_DAMAGE] = 10 + 10 + 2*Math.min(1, dco);
            break;
        
        case KHALI:
            jStats[FLAT_LUK] = 60;
            jStats[FLAT_ATTACK] = 30 + 30 + 30 + 30 +  Math.min(1, dco);
            jStats[FLAT_HP] = 500;
            jStats[FLAT_MP] = 500;
            jStats[CRIT_DAMAGE] = 20 + 8;
            jStats[FINAL_DAMAGE] = addFDSource(25, 30);
            jStats[IED] = addIEDSource(20, 20);
            jStats[PERCENT_HP] = 15;
            jStats[PERCENT_MP] = 15;
            jStats[BOSS_DAMAGE] = 30;
            break;

        case HOYOUNG:
            jStats[FINAL_DAMAGE] = addFDSource(addFDSource(10, 25),  Math.min(1, dco) + 10);
            jStats[PERCENT_ATTACK] = 10;
            jStats[BOSS_DAMAGE] = 20 + 20 + 20 + 30;
            jStats[FLAT_ATTACK] = 25 + 50 + 40 + 10 + 2*Math.min(1, dco);
            jStats[CRIT_DAMAGE] = 10 + 20 + 10 +  Math.min(1, dco);
            jStats[FLAT_LUK] = 60;
            jStats[IED] = addIEDSource(addIEDSource(20, 10), 10 +  Math.min(1, dco));
            jStats[PERCENT_HP] = 20;
            break;

    }

    if(dse >= 1)
        jStats[CRIT_DAMAGE] += 8;
    
    jStats[FLAT_ALL_STAT] += Math.floor(dmd/5);
    jStats[FLAT_ALL_STAT] += rope;
    jStats[FLAT_ALL_STAT] += Math.floor(dsi/5);
    jStats[FLAT_ATTACK] += blink;
    jStats[FLAT_MATT] += blink;
    
    if (dab >= 1)
    {
        jStats[FLAT_ATTACK] += 20;
        jStats[FLAT_DEF] += 425;
        jStats[FLAT_HP] += 475;
        jStats[FLAT_MP] += 475;
    }

    jStats[FLAT_ATTACK] += eb;
    jStats[FLAT_MATT] += eb;

    if (dhb >= 1)
    {
        jStats[PERCENT_HP] += 40;
        jStats[PERCENT_MP] += 40;
    }

    jStats[IED] = addIEDSource(jStats[IED], averageIEDfromAttacks);
    jStats[CRIT_DAMAGE] += averageCritDamageFromVS;

    jStats[PERCENT_ALL_STAT] += 15 + Math.min(1, dco); //maple warrior

    return jStats;
}