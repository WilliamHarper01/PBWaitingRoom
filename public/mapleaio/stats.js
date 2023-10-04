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
const FLAT_ALL_STAT = 31;
const STATS_LENGTH = 32;

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
    "allstat":      FLAT_ALL_STAT,
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
statDict[FLAT_ALL_STAT] = "allstat";