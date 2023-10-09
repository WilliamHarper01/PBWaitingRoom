const RING = 1;
const POCKET = 5;
const PENDANT = 6;
const WEAPON = 8;
const BELT = 9;
const HAT = 10;
const FACE_ACCESSORY = 11;
const EYE_ACCESSORY = 12;
const TOP = 13;
const BOTTOM = 14;
const BOOTS = 15;
const EARRINGS = 16;
const SHOULDER = 17;
const GLOVES = 18;
const EMBLEM = 19;
const BADGE = 20;
const MEDAL = 21;
const SECONDARY = 22;
const CAPE = 23;
const HEART = 24;

const ALL_CLASS = 0;
const WARRIOR = 1;
const MAGE = 2;
const BOWMAN = 3;
const THEIF = 4;
const PIRATE = 5;

const NO_SET = -1;
const LUCKY = -2;
const PITCHED = 0;
const SET_LENGTH = 1;

const setBonusTable = [
    //pitched
    [
        [BLANK, []], 
        [RING, []], 
        [PENDANT, 
            [
                [BOSS_DAMAGE, 10], 
                [FLAT_ALL_STAT, 10], 
                [FLAT_ATTACK, 10],
                [FLAT_HP, 250],
            ]
        ],
        [FACE_ACCESSORY, 
            [
                [IED, 10], 
                [FLAT_ALL_STAT, 10], 
                [FLAT_ATTACK, 10],
                [FLAT_HP, 250],
            ]
        ],
        [EYE_ACCESSORY, 
            [
                [CRIT_DAMAGE, 5], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_HP, 375],
            ]
        ],
        [EARRINGS, 
            [
                [BOSS_DAMAGE, 10], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_HP, 375],
            ]
        ],
        [BELT, 
            [
                [IED, 10], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_HP, 375],
            ]
        ],
        [POCKET, 
            [
                [CRIT_DAMAGE, 5], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_HP, 375],
            ]
        ],
        [BADGE, 
            [
                [BOSS_DAMAGE, 10], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_HP, 375],
            ]
        ],
        [EMBLEM, 
            [
                [CRIT_DAMAGE, 5], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_HP, 375],
            ]
        ],
        [HEART, []],


    ],

];

const baseEquips = {};

baseEquips["None"] = {};
baseEquips["None"].level = 0;
baseEquips["None"].type = RING;
baseEquips["None"].branch = ALL_CLASS;
baseEquips["None"].set = NO_SET;
baseEquips["None"].img = "Blank.png"
baseEquips["None"].stats = new Array(STATS_LENGTH).fill(0);
baseEquips["None"].stats[FLAT_STR] = 0;
baseEquips["None"].stats[FLAT_DEX] = 0;
baseEquips["None"].stats[FLAT_INT] = 0;
baseEquips["None"].stats[FLAT_LUK] = 0;
baseEquips["None"].stats[FLAT_ATTACK] = 0;
baseEquips["None"].stats[FLAT_DEF] = 0;


baseEquips["Magic Eyepatch"] = {};
baseEquips["Magic Eyepatch"].level = 160;
baseEquips["Magic Eyepatch"].type = EYE_ACCESSORY;
baseEquips["Magic Eyepatch"].branch = ALL_CLASS;
baseEquips["Magic Eyepatch"].set = PITCHED;
baseEquips["Magic Eyepatch"].img = "https://static.wikia.nocookie.net/maplestory/images/8/89/Eqp_Magic_Eyepatch.png"
baseEquips["Magic Eyepatch"].stats = new Array(STATS_LENGTH).fill(0);
baseEquips["Magic Eyepatch"].stats[FLAT_STR] = 10;
baseEquips["Magic Eyepatch"].stats[FLAT_DEX] = 10;
baseEquips["Magic Eyepatch"].stats[FLAT_INT] = 10;
baseEquips["Magic Eyepatch"].stats[FLAT_LUK] = 10;
baseEquips["Magic Eyepatch"].stats[FLAT_ATTACK] = 10;
baseEquips["Magic Eyepatch"].stats[FLAT_DEF] = 200;

baseEquips["Berserked"] = {};
baseEquips["Berserked"].level = 160;
baseEquips["Berserked"].type = FACE_ACCESSORY;
baseEquips["Berserked"].branch = ALL_CLASS;
baseEquips["Berserked"].set = PITCHED;
baseEquips["Berserked"].img = "https://static.wikia.nocookie.net/maplestory/images/8/89/Eqp_Berserked.png"
baseEquips["Berserked"].stats = new Array(STATS_LENGTH).fill(0);
baseEquips["Berserked"].stats[FLAT_STR] = 10;
baseEquips["Berserked"].stats[FLAT_DEX] = 10;
baseEquips["Berserked"].stats[FLAT_INT] = 10;
baseEquips["Berserked"].stats[FLAT_LUK] = 10;
baseEquips["Berserked"].stats[FLAT_ATTACK] = 10;
baseEquips["Berserked"].stats[FLAT_DEF] = 200;

baseEquips["Genesis Guards"] = {};
baseEquips["Genesis Guards"].level = 200;
baseEquips["Genesis Guards"].type = WEAPON;
baseEquips["Genesis Guards"].branch = THEIF;
baseEquips["Genesis Guards"].set = LUCKY;
baseEquips["Genesis Guards"].img = "https://static.wikia.nocookie.net/maplestory/images/9/97/Eqp_Genesis_Guards.png"
baseEquips["Genesis Guards"].stats = new Array(STATS_LENGTH).fill(0);
baseEquips["Genesis Guards"].stats[FLAT_STR] = 0;
baseEquips["Genesis Guards"].stats[FLAT_DEX] = 150;
baseEquips["Genesis Guards"].stats[FLAT_INT] = 0;
baseEquips["Genesis Guards"].stats[FLAT_LUK] = 150;
baseEquips["Genesis Guards"].stats[FLAT_ATTACK] = 172;
baseEquips["Genesis Guards"].stats[FLAT_DEF] = 0;
baseEquips["Genesis Guards"].stats[BOSS_DAMAGE] = 30;
baseEquips["Genesis Guards"].stats[IED] = 20;

