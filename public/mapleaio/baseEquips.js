const TOTEM = 0;
const RING = 1;
const HAT = 2;
const EMBLEM = 3;
const PENDANT = 6;
const FACE_ACCESSORY = 7;
const BADGE = 8;
const EYE_ACCESSORY = 12;
const EARRINGS = 13;
const MEDAL = 14;
const WEAPON = 16;
const TOP = 17;
const SHOULDER = 18;
const SECONDARY = 19;
const POCKET = 20;
const BELT = 21;
const BOTTOM = 22;
const GLOVES = 23;
const CAPE = 24;
const BOOTS = 25;
const HEART = 26;

const typeDict = {};

typeDict["RING"] = RING;
typeDict["POCKET"] = POCKET;
typeDict["PENDANT"] = PENDANT;
typeDict["WEAPON"] = WEAPON;
typeDict["BELT"] = BELT;
typeDict["HAT"] = HAT;
typeDict["FACE_ACCESSORY"] = FACE_ACCESSORY;
typeDict["EYE_ACCESSORY"] = EYE_ACCESSORY;
typeDict["TOP"] = TOP;
typeDict["BOTTOM"] = BOTTOM;
typeDict["BOOTS"] = BOOTS;
typeDict["EARRINGS"] = EARRINGS;
typeDict["SHOULDER"] = SHOULDER;
typeDict["GLOVES"] = GLOVES;
typeDict["EMBLEM"] = EMBLEM;
typeDict["BADGE"] = BADGE;
typeDict["MEDAL"] = MEDAL;
typeDict["SECONDARY"] = SECONDARY;
typeDict["CAPE"] = CAPE;
typeDict["HEART"] = HEART;

const ALL_CLASS = 0;
const WARRIOR = 1;
const MAGE = 2;
const BOWMAN = 3;
const THIEF = 4;
const PIRATE = 5;

const branchDict = {};

branchDict["ALL_CLASS"] = ALL_CLASS;
branchDict["WARRIOR"] = WARRIOR;
branchDict["MAGE"] = MAGE;
branchDict["BOWMAN"] = BOWMAN;
branchDict["THIEF"] = THIEF;
branchDict["PIRATE"] = PIRATE;

const NO_SET = -1;
const LUCKY = -2;
const PITCHED = 0;
const SET_LENGTH = 1;

const setDict = {};

setDict["NO_SET"] = NO_SET;
setDict["LUCKY"] = LUCKY;
setDict["PITCHED"] = PITCHED;



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
                [FLAT_MATT, 10],
                [FLAT_HP, 250],
            ]
        ],
        [FACE_ACCESSORY, 
            [
                [IED, 10], 
                [FLAT_ALL_STAT, 10], 
                [FLAT_ATTACK, 10],
                [FLAT_MATT, 10],
                [FLAT_HP, 250],
            ]
        ],
        [EYE_ACCESSORY, 
            [
                [CRIT_DAMAGE, 5], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_MATT, 10],
                [FLAT_HP, 375],
            ]
        ],
        [EARRINGS, 
            [
                [BOSS_DAMAGE, 10], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_MATT, 15],
                [FLAT_HP, 375],
            ]
        ],
        [BELT, 
            [
                [IED, 10], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_MATT, 15],
                [FLAT_HP, 375],
            ]
        ],
        [POCKET, 
            [
                [CRIT_DAMAGE, 5], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_MATT, 15],
                [FLAT_HP, 375],
            ]
        ],
        [BADGE, 
            [
                [BOSS_DAMAGE, 10], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_MATT, 15],
                [FLAT_HP, 375],
            ]
        ],
        [EMBLEM, 
            [
                [CRIT_DAMAGE, 5], 
                [FLAT_ALL_STAT, 15], 
                [FLAT_ATTACK, 15],
                [FLAT_MATT, 15],
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




