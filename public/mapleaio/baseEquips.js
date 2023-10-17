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
const SHOES = 25;
const HEART = 26;

const typeDict = {};

typeDict["TOTEM"] = TOTEM;
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
typeDict["SHOES"] = SHOES;
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
const DAWN = 1;
const SUPERIOR_GOLLUX = 2;
const RA_WARRIOR = 3;
const RA_MAGE = 4;
const RA_BOWMAN = 5;
const RA_THIEF = 6;
const RA_PIRATE = 7;
const ARCANE = 8;
const DAYS = 9;
const BOSS = 10;
const AFTERLANDS = 11;
const ANTIQUE = 12;
const SET_LENGTH = 13;

const setDict = {};

setDict["NO_SET"] = NO_SET;
setDict["LUCKY"] = LUCKY;
setDict["PITCHED"] = PITCHED;
setDict["DAWN"] = DAWN;
setDict["SUPERIOR_GOLLUX"] = SUPERIOR_GOLLUX;
setDict["RA_WARRIOR"] = RA_WARRIOR;
setDict["RA_THIEF"] = RA_THIEF;
setDict["RA_PIRATE"] = RA_PIRATE;
setDict["RA_BOWMAN"] = RA_BOWMAN;
setDict["RA_MAGE"] = RA_MAGE;
setDict["ARCANE"] = ARCANE;
setDict["DAYS"] = DAYS;
setDict["BOSS"] = BOSS;
setDict["AFTERLANDS"] = AFTERLANDS;
setDict["ANTIQUE"] = ANTIQUE;



const setBonusTable = [];
    
    
setBonusTable[PITCHED] = 
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


];

setBonusTable[DAWN] = 
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
    [EARRINGS, 
        [
            [FLAT_ALL_STAT, 10], 
            [FLAT_ATTACK, 10],
            [FLAT_MATT, 10],
            [FLAT_HP, 250],
        ]
    ],
    [FACE_ACCESSORY, 
        [
            [IED, 10], 
            [FLAT_ALL_STAT, 15], 
            [FLAT_ATTACK, 10],
            [FLAT_MATT, 10],
            [FLAT_HP, 250],
            [FLAT_DEF, 250],
        ]
    ]
];

setBonusTable[SUPERIOR_GOLLUX] = 
[
    [BLANK, []], 
    [RING, []], 
    [PENDANT, 
        [
            [FLAT_ALL_STAT, 20], 
            [FLAT_HP, 1500],
            [FLAT_MP, 1500],
        ]
    ],
    [EARRINGS, 
        [
            [FLAT_MATT, 35],
            [FLAT_ATTACK, 35],
            [PERCENT_MP, 13],
            [PERCENT_HP, 13],
        ]
    ],
    [BELT, 
        [
            [BOSS_DAMAGE, 30],
            [IED, 30],
        ]
    ]
];

setBonusTable[RA_WARRIOR] = 
[
    [BLANK, []], 
    [HAT, []], 
    [TOP, 
        [
            [FLAT_STR, 20],
            [FLAT_DEX, 20],
            [FLAT_HP, 1000],
            [FLAT_MP, 1000],
        ]
    ],
    [BOTTOM, 
        [
            [FLAT_ATTACK, 50],
            [PERCENT_MP, 10],
            [PERCENT_HP, 10],
        ]
    ],
    [WEAPON, 
        [
            [BOSS_DAMAGE, 30],
        ]
    ]
];

setBonusTable[RA_BOWMAN] = 
[
    [BLANK, []], 
    [HAT, []], 
    [TOP, 
        [
            [FLAT_STR, 20],
            [FLAT_DEX, 20],
            [FLAT_HP, 1000],
            [FLAT_MP, 1000],
        ]
    ],
    [BOTTOM, 
        [
            [FLAT_ATTACK, 50],
            [PERCENT_MP, 10],
            [PERCENT_HP, 10],
        ]
    ],
    [WEAPON, 
        [
            [BOSS_DAMAGE, 30],
        ]
    ]
];

setBonusTable[RA_PIRATE] = 
[
    [BLANK, []], 
    [HAT, []], 
    [TOP, 
        [
            [FLAT_STR, 20],
            [FLAT_DEX, 20],
            [FLAT_HP, 1000],
            [FLAT_MP, 1000],
        ]
    ],
    [BOTTOM, 
        [
            [FLAT_ATTACK, 50],
            [PERCENT_MP, 10],
            [PERCENT_HP, 10],
        ]
    ],
    [WEAPON, 
        [
            [BOSS_DAMAGE, 30],
        ]
    ]
];

setBonusTable[RA_THIEF] = 
[
    [BLANK, []], 
    [HAT, []], 
    [TOP, 
        [
            [FLAT_LUK, 20],
            [FLAT_DEX, 20],
            [FLAT_HP, 1000],
            [FLAT_MP, 1000],
        ]
    ],
    [BOTTOM, 
        [
            [FLAT_ATTACK, 50],
            [PERCENT_MP, 10],
            [PERCENT_HP, 10],
        ]
    ],
    [WEAPON, 
        [
            [BOSS_DAMAGE, 30],
        ]
    ]
];

setBonusTable[RA_MAGE] = 
[
    [BLANK, []], 
    [HAT, []], 
    [TOP, 
        [
            [FLAT_INT, 20],
            [FLAT_LUK, 20],
            [FLAT_HP, 1000],
            [FLAT_MP, 1000],
        ]
    ],
    [BOTTOM, 
        [
            [FLAT_MATT, 50],
            [PERCENT_MP, 10],
            [PERCENT_HP, 10],
        ]
    ],
    [WEAPON, 
        [
            [BOSS_DAMAGE, 30],
        ]
    ]
];

setBonusTable[ARCANE] = 
[
    [BLANK, []], 
    [HAT, []], 
    [TOP, 
        [
            [FLAT_MATT, 30],
            [FLAT_ATTACK, 30],
            [BOSS_DAMAGE, 10],
        ]
    ],
    [SHOES, 
        [
            [FLAT_MATT, 30],
            [FLAT_ATTACK, 30],
            [IED, 10],
            [FLAT_DEF, 400],
        ]
    ],
    [WEAPON, 
        [
            [FLAT_MATT, 35],
            [FLAT_ATTACK, 35],
            [BOSS_DAMAGE, 10],
            [FLAT_ALL_STAT, 50],
        ]
    ],
    [GLOVES, 
        [
            [FLAT_MATT, 40],
            [FLAT_ATTACK, 40],
            [BOSS_DAMAGE, 10],
            [FLAT_HP, 2000],
            [FLAT_MP, 2000],
        ]
    ],
    [CAPE, 
        [
            [FLAT_MATT, 30],
            [FLAT_ATTACK, 30],
            [PERCENT_HP, 30],
            [PERCENT_HP, 30],
        ]
    ],
    [SHOULDER, 
        [
            [FLAT_MATT, 30],
            [FLAT_ATTACK, 30],
            [IED, 10],
        ]
    ],
];

setBonusTable[DAYS] = 
[
    [BLANK, []], 
    [MEDAL, []], 
    [BADGE, 
        [
            [IED, 10],
        ]
    ],
];

setBonusTable[BOSS] =
    [
        [BLANK, []],
        [RING, []],
        [EYE_ACCESSORY, []],
        [PENDANT,
            [
                [FLAT_ALL_STAT, 10],
                [FLAT_ATTACK, 5],
                [FLAT_MATT, 5],
                [PERCENT_HP, 5],
                [PERCENT_MP, 5],
            ]
        ],
        [POCKET, []],
        [EARRINGS,
            [
                [FLAT_ALL_STAT, 10],
                [FLAT_ATTACK, 5],
                [FLAT_MATT, 5],
                [PERCENT_HP, 5],
                [PERCENT_MP, 5],
            ]
        ],
        [BADGE, []],
        [FACE_ACCESSORY,
            [
                [IED, 10],
                [FLAT_ALL_STAT, 0],
                [FLAT_ATTACK, 10],
                [FLAT_MATT, 10],
                [FLAT_DEF, 80],
            ]
        ],
    ];

setBonusTable[AFTERLANDS] = 
[
    [BLANK, []], 
    [TOTEM, []], 
    [TOTEM, []],
    [TOTEM, 
        [
            [FLAT_ATTACK, 10],
        ]
    ],
];

setBonusTable[ANTIQUE] = 
[
    [BLANK, []], 
    [TOTEM, []], 
    [TOTEM, []],
    [TOTEM, 
        [
            [FLAT_ATTACK, 15],
        ]
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




