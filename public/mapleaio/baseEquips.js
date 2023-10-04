const RING = 0;
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

const baseEquips = {};

baseEquips["None"] = {};
baseEquips["None"].level = 0;
baseEquips["None"].type = RING;
baseEquips["None"].img = "../img/Blank.png"
baseEquips["None"].stats = new Array(STATS_LENGTH).fill(0);
baseEquips["None"].stats[FLAT_STR] = 0;
baseEquips["None"].stats[FLAT_DEX] = 0;
baseEquips["None"].stats[FLAT_INT] = 0;
baseEquips["None"].stats[FLAT_LUK] = 0;
baseEquips["None"].stats[FLAT_ATTACK] = 0;
baseEquips["None"].stats[FLAT_DEF] = 0;

baseEquips["Berserked"] = {};
baseEquips["Berserked"].level = 160;
baseEquips["Berserked"].type = FACE_ACCESSORY;
baseEquips["Berserked"].img = "https://static.wikia.nocookie.net/maplestory/images/8/89/Eqp_Berserked.png"
baseEquips["Berserked"].stats = new Array(STATS_LENGTH).fill(0);
baseEquips["Berserked"].stats[FLAT_STR] = 10;
baseEquips["Berserked"].stats[FLAT_DEX] = 10;
baseEquips["Berserked"].stats[FLAT_INT] = 10;
baseEquips["Berserked"].stats[FLAT_LUK] = 10;
baseEquips["Berserked"].stats[FLAT_ATTACK] = 10;
baseEquips["Berserked"].stats[FLAT_DEF] = 200;

