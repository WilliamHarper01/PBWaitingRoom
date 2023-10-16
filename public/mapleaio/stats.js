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
const NORMAL_DAMAGE = 32;
const FLAT_MATT = 33;
const PERCENT_MATT = 34;
const FINAL_MATT = 35;
const STATS_LENGTH = 36;

//placeholder stats that don't do anything
const FLAT_COOLDOWN_REDUCTION = 50;
const PERCENT_COOLDOWN_REDUCTION = 60;
const SKIP_COOLDOWN = 51;
const ATTACK_SPEED = 52;
const CRIT_RATE = 53;
const BUFF_DURATION = 54;
const MINION_DURATION = 55;

const statDict = {
    "-none-":           BLANK,
    "STR":              FLAT_STR,
    "DEX":              FLAT_DEX,
    "INT":              FLAT_INT,
    "LUK":              FLAT_LUK,
    "HP":               FLAT_HP,
    "MP":               FLAT_MP,
    "DEF":              FLAT_DEF,
    "%STR":             PERCENT_STR,
    "%INT":             PERCENT_INT,
    "%DEX":             PERCENT_DEX,
    "%LUK":             PERCENT_LUK,
    "%HP":              PERCENT_HP,
    "%MP":              PERCENT_MP,
    "%DEF":             PERCENT_DEF,
    "Final STR":        FINAL_STR,
    "Final INT":        FINAL_INT,
    "Final DEX":        FINAL_DEX,
    "Final LUK":        FINAL_LUK,
    "Final HP":         FINAL_HP,
    "Final MP":         FINAL_MP,
    "Final DEF":        FINAL_DEF,
    "ATT":         FLAT_ATTACK,
    "%ATT":        PERCENT_ATTACK,
    "Final ATT":   FINAL_ATTACK,
    "%Damage":          DAMAGE,
    "%Boss Damage":     BOSS_DAMAGE,
    "%IED":             IED,
    "%Critical Damage": CRIT_DAMAGE,
    "%Final Damage":    FINAL_DAMAGE,
    "%All Stats":       PERCENT_ALL_STAT,
    "All Stats":        FLAT_ALL_STAT,
    "Normal Damage":    NORMAL_DAMAGE,
    "MATT":         FLAT_MATT,
    "%MATT":        PERCENT_MATT,
    "Final MATT":   FINAL_MATT,
}

statDict[BLANK] = "-none-";
statDict[FLAT_STR] = "STR";
statDict[FLAT_DEX] = "DEX";
statDict[FLAT_INT] = "INT";
statDict[FLAT_LUK] = "LUK";
statDict[FLAT_HP] = "HP";
statDict[FLAT_MP] = "MP";
statDict[FLAT_DEF] = "DEF";
statDict[PERCENT_STR] ="%STR";
statDict[PERCENT_INT] ="%INT";
statDict[PERCENT_DEX] ="%DEX";
statDict[PERCENT_LUK] ="%LUK";
statDict[PERCENT_HP] = "%HP";
statDict[PERCENT_MP] = "%MP";
statDict[PERCENT_DEF] ="%DEF";
statDict[FINAL_STR] = "Final STR";
statDict[FINAL_INT] = "Final INT";
statDict[FINAL_DEX] = "Final DEX";
statDict[FINAL_LUK] = "Final LUK";
statDict[FINAL_HP] = "Final HP";
statDict[FINAL_MP] = "Final MP";
statDict[FINAL_DEF] = "Final DEF";
statDict[FLAT_ATTACK] = "ATT";
statDict[PERCENT_ATTACK] = "%ATT";
statDict[FINAL_ATTACK] = "Final ATT";
statDict[DAMAGE] = "%Damage";
statDict[BOSS_DAMAGE] = "%Boss Damage";
statDict[IED] = "%IED";
statDict[CRIT_DAMAGE] = "%Critical Damage";
statDict[FINAL_DAMAGE] = "%Final Damage";
statDict[PERCENT_ALL_STAT] = "%All Stats";
statDict[FLAT_ALL_STAT] ="All Stats";
statDict[NORMAL_DAMAGE] = "Normal Damage";
statDict[FLAT_MATT] = "MATT";
statDict[PERCENT_MATT] = "%MATT";
statDict[FINAL_MATT] = "Final MATT";

statDict[FLAT_COOLDOWN_REDUCTION] = "cooldown reduction";
statDict[PERCENT_COOLDOWN_REDUCTION] = "%cooldown reduction";
statDict[SKIP_COOLDOWN] = "cooldown skip";
statDict[CRIT_RATE] = "crit rate";
statDict[ATTACK_SPEED] = "attack speed";
statDict[BUFF_DURATION] = "buff duration";
statDict[MINION_DURATION] = "minion duration";
