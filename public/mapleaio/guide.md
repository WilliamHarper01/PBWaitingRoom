# MapleAIO Guide

- [MapleAIO Guide](#mapleaio-guide)
  - [Creating an Account](#creating-an-account)
  - [Tabs](#tabs)
    - [Character](#character)
      - [Job](#job)
      - [Common Skills](#common-skills)
      - [Average IED from Attacks](#average-ied-from-attacks)
      - [Average Crit Damage from Vicious Shot](#average-crit-damage-from-vicious-shot)
    - [Equips](#equips)
    - [Link Skills](#link-skills)
    - [Legion](#legion)
      - [Legion Grid](#legion-grid)
      - [Legion Blocks](#legion-blocks)
    - [Hyper Stats](#hyper-stats)
    - [Symbols](#symbols)
    - [Familiars](#familiars)
      - [Familiar Cards](#familiar-cards)
      - [Familiar Badges](#familiar-badges)
    - [Misc](#misc)
      - [Inner Ability](#inner-ability)
      - [Event Stats/Title](#event-statstitle)
      - [Weapon Soul](#weapon-soul)
  - [FD Gain](#fd-gain)
  - [Stat Equivalence](#stat-equivalence)
  - [Stats](#stats)
  - [Save](#save)


## Creating an Account

When you first visit the app, you will be directed to a login screen. You must create an account in order to use the calculator. Once your account is created, you will be redirected to the app.

## Tabs

The calculator consists of tabs which allow you to select equips, link skills, legion, etc. Your damage range will automatically be updated everytime a change is made in the tabs.

### Character

These are the traits of your character that matter for calculating damage range.

#### Job

Passive effects from skills are automatically added when you select a job. The values of the passives are based on the maple wiki, which may be out of date. The code that calculates passives for each job can be found [here](https://pbwaitingroom.net/mapleaio/index.html)

#### Common Skills

Input the skill levels of your common skills here, level 0 is equivalent to not having the skill on. If your job has the "real" version of any of these skills, set the common skill version to 0.

#### Average IED from Attacks

Many jobs have IED built into their attacks. These sources of IED are not included as passives, so the calculator allows you to input an extra IED source to compensate for this.

#### Average Crit Damage from Vicious Shot

Since the effects of Viscious Shot scale based on your characters crit rate, which is not included in the calculator, archers can input an extra source of crit damage which represents the average crit damage they recieve from the skill.

### Equips

The Equips tab shows a UI similar to the equip menu in-game. To edit an equip, select the slot you would like to edit, and edit the values to the right.

### Link Skills

The Link Skills tab allows you to select the job, and level of all 13 of your characters link skills. If a link skill is used by multiple jobs, you only have to select one of the jobs.

### Legion

#### Legion Grid

Assign the values of each legion grid section. Note that these values are the ammount of blocks in a section, not the actual value of the stat.

#### Legion Blocks

Assign the ranks of each character in your legion. Level 0 corresponds with not having the character at all.

### Hyper Stats

The Hyper Stats tab allows you to select the points allocated to each of your hyper stats. Note that these values are the levels in the menu, and not the actual ammount of stat that it gives you.

### Symbols

The Symbols menu allows you to select the level of each Arcane/Sacred symbol you have equipped.

### Familiars

#### Familiar Cards

Assign the values of each line, on all 3 familiar cards you have equipped.

#### Familiar Badges

Select which familiar badges your character has equipped.

### Misc

#### Inner Ability

Select the values of each line of your inner ability. Lines such as crit rate, and buff duration are not included, so just leave these blank.

#### Event Stats/Title

Assign any event stats your character currently has, and the title it is wearing. You can also put other miscellaneous stats here.

#### Weapon Soul

Select the potential on your weapon's soul. The base 20 attack from charging the soul is automatically included.

## FD Gain

Shows you the total Final Damage Gained, or lost from an edit to your account. The percent gain is based on the value that you have saved, so saving will reset this value to 0.

## Stat Equivalence

Shows you the final damage gained from increasing each stat by 1.

## Stats

Shows you the total value of each stat in the damage formula calculation. Note that stats usually have a base value, a percentage increase, and a final additive increase.

## Save

Saves your progress to your account, which can then be accessed later on multiple devices.