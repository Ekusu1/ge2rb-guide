const WIKI_LINK = 'http://godeater.wikia.com/wiki/';
var MAIN_DATA   = {
	skills: {
		effect: [
			{name:"Gun ATK",minLv:-10,maxLv:10,description:"Increases or decreases gun attack power."},
			{name:"DEF",minLv:-10,maxLv:10,description:"Increases or decreases defense."},
			{name:"Close Quarters DEF",minLv:-10,maxLv:10,description:"Increases or decreases DEF when fighting two or more Aragami."},
			{name:"Damage Cut",minLv:1,maxLv:4,description:"Reduces the amount of damage received from Aragami."},
			{name:"Oracle Absorbtion",minLv:-10,maxLv:10,description:"Increases or decreases the amount of Oracle Points obtained when attacking."},
			{name:"Step Distance",minLv:-10,maxLv:10,description:"Increases or decreases the distance you travel when performing a step."},
			{name:"Knockback Distance",minLv:-5,maxLv:5,description:"Reduces or increases the distance you are knocked back when taking damage."},
			{name:"Speed",minLv:-5,maxLv:5,description:"Increases or decreases movement speed."},
			{name:"Melee Attack Specialist",minLv:-10,maxLv:10,description:"Increases or decreases the attack power of close-range special attacks."},
			{name:"Melee Spcial ATK Stam.",minLv:-10,maxLv:10,description:"Increases or decreases the amount of stamina consumed for close-range special attacks."},
			{name:"Charged Ability Speed",minLv:-10,maxLv:10,description:"Increases or decreases the the time required to perform charged attacks."},
			{name:"Combo Master",minLv:-10,maxLv:10,description:"Increases or decreases the amount of damage dealt by combination attacks."},
			{name:"All Out Attack",minLv:-10,maxLv:10,description:"Consums stamina in exchange for a 25% ATK increase when attacking with close-range weapon."},
			{name:"Sword Master",minLv:-10,maxLv:10,description:"When attacking with a close-range weapon, attacking an Aragami's weak point does 50% more damage. Attacking any other part of the Aragami does 50% less damage."},
			{name:"Ammo Master",minLv:-10,maxLv:10,description:"Increases or decreases the power of shot-type Oracle Bullet."},
			{name:"Laser Master",minLv:-10,maxLv:10,description:"Increases or decreases the strength of laser-type Oracle Bullet."},
			{name:"Pyro Master",minLv:-10,maxLv:10,description:"Increases or decreases the strength of radial-type Oracle Bullet."},
			{name:"Bomb Master",minLv:-10,maxLv:10,description:"Raises or lowers the strength of explosive Oracle Bullets."},
			{name:"Frugal",minLv:-10,maxLv:10,description:"Increases or decreases the consumption of Oracle Points in gun-form."},
			{name:"Trigger Happy",minLv:-10,maxLv:10,description:"By consuming stamina when firing your gun, you can halve the amount of OP Bullet use. The maximum OP that can be reduced depends on the user's stamina."},
			{name:"Gun Focus Specialis",minLv:-10,maxLv:10,description:"Eliminates knockback from enemy attacks when engaging in gun-form special actions."},
			{name:"Gun Speed Specialist",minLv:-10,maxLv:10,description:"Increases or decreases the speed of special gun-form actions."},
			{name:"Gun Form Lock-On",minLv:-10,maxLv:10,description:"It becomes possible to lock on in gun-form just as in close-range form, and forms can be changed without disrupting the lock."},
			{name:"Auto Aim",minLv:-10,maxLv:10,description:"Automatically targets Aragami when aiming. This skill is incompatible with \"Gun Form Lock On\", as you can no longer enter the aiming mode."},
			{name:"Devour Bullet Power",minLv:-10,maxLv:10,description:"Increases or decreases the power of Aragami Bullets."},
			{name:"Disable Homing",minLv:-10,maxLv:10,description:"Disables a bullet's homing ability. Has no effect on Bullets received from allies."},
			{name:"Item Effect",minLv:-10,maxLv:10,description:"Increases or decreases the effect of items that affect HP, OP, and stamina."},
			{name:"Item Effect Duration",minLv:-10,maxLv:10,description:"Increases or decreases the length of time that item effects last."},
			{name:"Item Speed",minLv:-10,maxLv:10,description:"Increases or decreases the time it takes to use an item."},
			{name:"Guard Speed",minLv:-10,maxLv:10,description:"Increases the speed at which you draw your shield."},
			{name:"Guard Radius",minLv:-10,maxLv:10,description:"Increases the radius of your guard."},
			{name:"Reduced Guard Damage",minLv:-10,maxLv:10,description:"Reduces or increases the amount of damage received when guarding."},
			{name:"Auto Guard",minLv:-10,maxLv:10,description:"Automatically guards Aragami attacks if you can guard against them."},
			{name:"Hidden Attack",minLv:-10,maxLv:10,description:""},
			{name:"Exterminator",minLv:-10,maxLv:10,description:""},
			{name:"Survival Instinct",minLv:-10,maxLv:10,description:""},
			{name:"Wild Instinct",minLv:-10,maxLv:10,description:""},
			{name:"Firm Stand",minLv:-10,maxLv:10,description:""},
			{name:"Prepared",minLv:-10,maxLv:10,description:""},
			{name:"Burst Duration",minLv:-10,maxLv:10,description:""},
			{name:"Adrenalin Rush",minLv:-10,maxLv:10,description:""},
			{name:"Devour HP Absorb",minLv:-10,maxLv:10,description:""},
			{name:"Devour Absorb Amount",minLv:-10,maxLv:10,description:""},
			{name:"Devour Oracle Absorb",minLv:-10,maxLv:10,description:""},
			{name:"Muted",minLv:-10,maxLv:10,description:""},
			{name:"Dexterous",minLv:-10,maxLv:10,description:""},
			{name:"Mid-Air Jump",minLv:-10,maxLv:10,description:""},
			{name:"Exaggerated",minLv:-10,maxLv:10,description:""},
			{name:"Total Stamina Efficiency",minLv:-10,maxLv:10,description:""},
			{name:"Athlet",minLv:-10,maxLv:10,description:""},
			{name:"Steps Master",minLv:-10,maxLv:10,description:""},
			{name:"Calm Breather",minLv:-10,maxLv:10,description:""},
			{name:"Medic",minLv:-10,maxLv:10,description:""},
			{name:"Aid Recovery Amount",minLv:-10,maxLv:10,description:""},
			{name:"Giving",minLv:-10,maxLv:10,description:""},
			{name:"Attack Up on Aid",minLv:-10,maxLv:10,description:""},
			{name:"Defense Up on Aid",minLv:-10,maxLv:10,description:""},
			{name:"Recovery Up on Aid",minLv:-10,maxLv:10,description:""},
			{name:"Speed Up on Aid",minLv:-10,maxLv:10,description:""},
			{name:"Attack Up on Rescue",minLv:-10,maxLv:10,description:""},
			{name:"Defense Up on Rescue",minLv:-10,maxLv:10,description:""},
			{name:"Recovery Up on Rescue",minLv:-10,maxLv:10,description:""},
			{name:"Venom",minLv:-10,maxLv:10,description:""},
			{name:"Hold",minLv:-10,maxLv:10,description:""},
			{name:"Bind",minLv:-10,maxLv:10,description:""},
			{name:"Debuff Stacking",minLv:-10,maxLv:10,description:""},
			{name:"Venom Resistance",minLv:-10,maxLv:10,description:""},
			{name:"Leak Resistance",minLv:-10,maxLv:10,description:""},
			{name:"Jamming Resistance",minLv:-10,maxLv:10,description:""},
			{name:"Stun Resistance",minLv:-10,maxLv:10,description:""},
			{name:"Enemy HP Vision",minLv:-10,maxLv:10,description:""},
			{name:"Sensitive",minLv:-10,maxLv:10,description:""},
			{name:"Wrath of Revenge",minLv:-10,maxLv:10,description:""},
			{name:"Raging Blade",minLv:-10,maxLv:10,description:""},
			{name:"Raging Gun",minLv:-10,maxLv:10,description:""},
			{name:"Covert Team",minLv:-10,maxLv:10,description:""},
			{name:"Acrobat Team",minLv:-10,maxLv:10,description:""},
			{name:"Charisma",minLv:-10,maxLv:10,description:""},
			{name:"Friendship",minLv:-10,maxLv:10,description:""},
			{name:"Beloved",minLv:-10,maxLv:10,description:""},
			{name:"Aid Burst",minLv:-10,maxLv:10,description:""},
			{name:"Mutual Burst",minLv:-10,maxLv:10,description:""},
			{name:"Hate Up",minLv:-10,maxLv:10,description:""},
			{name:"Enemy Calm",minLv:-10,maxLv:10,description:""},
			{name:"Connoisseur",minLv:-10,maxLv:10,description:""},
			{name:"Gourmet",minLv:-10,maxLv:10,description:""},
			{name:"Stamina Auto-Recovery",minLv:-10,maxLv:10,description:"Stamina recovery amount increses."},
			{name:"Greedy",minLv:-10,maxLv:10,description:""},
			{name:"Lucky",minLv:-10,maxLv:10,description:""},
			{name:"Rare Items for All",minLv:-10,maxLv:10,description:""},
			{name:"God of Rare Drops",minLv:-10,maxLv:10,description:""},
			{name:"Share the Wealth",minLv:-10,maxLv:10,description:""},
			{name:"JG HP Restore",minLv:-10,maxLv:10,description:""},
			{name:"JG Stamina Restore",minLv:-10,maxLv:10,description:""},
			{name:"JG OP Restore",minLv:-10,maxLv:10,description:""},
			{name:"Total Evoke Rate",minLv:-10,maxLv:10,description:""},
			{name:"Critical Evoke Rate",minLv:-10,maxLv:10,description:""},
			{name:"Just Guard Evoke Rate",minLv:-10,maxLv:10,description:""},
			{name:"Total Endurance Up",minLv:-10,maxLv:10,description:""},
			{name:"Resilience",minLv:-10,maxLv:10,description:""},
			{name:"[B] Melee ATK",minLv:-10,maxLv:10,description:""},
			{name:"[B] Mid-Air Melee ATK",minLv:-10,maxLv:10,description:""},
			{name:"[B] Gun ATK",minLv:-10,maxLv:10,description:""},
			{name:"[B] DEF",minLv:-10,maxLv:10,description:""},
			{name:"[B] Combo Master",minLv:-10,maxLv:10,description:""},
			{name:"[B] Item Effect",minLv:-10,maxLv:10,description:""},
			{name:"[B] Item Effect Duration",minLv:-10,maxLv:10,description:""},
			{name:"[B] Item Speed",minLv:-10,maxLv:10,description:""},
			{name:"[B] Recovery Item Speed",minLv:-10,maxLv:10,description:""},
			{name:"[B] Recovery Bullet OP Usage",minLv:-10,maxLv:10,description:""},
			{name:"[B] Heal Bullet OP Use",minLv:-10,maxLv:10,description:""},
			{name:"[B] Automatic Recovery",minLv:-10,maxLv:10,description:""},
			{name:"[B] Stamina Auto-Recovery",minLv:-10,maxLv:10,description:""},
			{name:"[B] Oracle Auto-Recovery",minLv:-10,maxLv:10,description:""},
			{name:"[B] Melee ATK HP Absorb",minLv:-10,maxLv:10,description:""},
			{name:"[B] Oracle Absorbtion",minLv:-10,maxLv:10,description:""},
			{name:"[B] Guard Stamina",minLv:-10,maxLv:10,description:""},
			{name:"[B] Reduced Guard Damage",minLv:-10,maxLv:10,description:""},
			{name:"[B] Firm Stand",minLv:-10,maxLv:10,description:""},
			{name:"[B] Prepared",minLv:-10,maxLv:10,description:""},
			{name:"[B] Super Muted",minLv:-10,maxLv:10,description:""},
			{name:"[B] Debuff Stacking",minLv:-10,maxLv:10,description:""},
			{name:"[B] Total Debuff Resistance",minLv:-10,maxLv:10,description:""},
			{name:"[B] Enemy HP Vision",minLv:-10,maxLv:10,description:""},
			{name:"[B] Sensitive",minLv:-10,maxLv:10,description:""},
			{name:"[B] Hate Control",minLv:-10,maxLv:10,description:""},
			{name:"[B] Hate Up",minLv:-10,maxLv:10,description:""},
			{name:"[B] Link Aid Efficiency",minLv:-10,maxLv:10,description:""},
			{name:"[B] Link Aid Strengthen",minLv:-10,maxLv:10,description:""},
			{name:"[B] Devour Bullet Quantity",minLv:-10,maxLv:10,description:""},
			{name:"[B] Upgrade Blood Arts",minLv:-10,maxLv:10,description:"Blood Art Power increases."},
			{name:"[B] Total Evoke Rate Up",minLv:-10,maxLv:10,description:""}
		],
		support: [
			{name:"Reward Credits Up",minLv:1,maxLv:10,description:""},
			{name:"Ignore Endurance",minLv:1,maxLv:10,description:""},
			{name:"Ignore Time",minLv:1,maxLv:10,description:""},
			{name:"Ignore Bond",minLv:1,maxLv:5,description:""},
			{name:"Reward Rate Up",minLv:1,maxLv:10,description:""},
			{name:"Bond Break Reward Up",minLv:1,maxLv:10,description:""},
			{name:"Get Consumable Items",minLv:1,maxLv:10,description:""},
			{name:"Abandoned Arc Rare Up",minLv:1,maxLv:10,description:""},
			{name:"Abandoned Arc Parts Up",minLv:1,maxLv:10,description:""},
			{name:"BA Chance of Awakening Up",minLv:1,maxLv:10,description:""},
			{name:"BB Chance of Awakening Up",minLv:1,maxLv:10,description:""},
			{name:"Team AP up",minLv:1,maxLv:10,description:""},
			{name:"Additional GAP",minLv:1,maxLv:10,description:""},
			{name:"Support Skill Uses +1",minLv:1,maxLv:10,description:""},
			{name:"Support Redraw",minLv:1,maxLv:10,description:""},
			{name:"God Arc Evoke Rate Up",minLv:1,maxLv:10,description:""},
			{name:"Individual AP Up",minLv:10,maxLv:10,description:""}
		],
		compound: [
			{name:"Active",skills:[{skill:"[B] Devour Bullet Quantity",lv:1},{skill:"Mutual Burst",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Active Guard",skills:[{skill:"Guard Speed",lv:1},{skill:"Athlet",lv:1},],special:false},
			{name:"Acute Perception",skills:[{skill:"Enemy HP Vision",lv:1},{skill:"Sensitive",lv:1},],special:false},
			{name:"Advance",skills:[{skill:"Oracle",lv:1},{skill:"Muted",lv:1},{skill:"Gun Speed Specialist",lv:1},{skill:"Gun ATK",lv:1},],special:false},
			{name:"Aerial Gunner",skills:[{skill:"[B] Heal Bullet OP Use",lv:1},{skill:"Oracle",lv:1},{skill:"Mid-Air Jump",lv:1},],special:false},
			{name:"Aggressive",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"[B] DEF",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Agitator",skills:[{skill:"Enemy Calm",lv:-5},],special:true},
			{name:"Air",skills:[{skill:"Hate Up",lv:-1},],special:false},
			{name:"Air Crusher",skills:[{skill:"All Out Attack",lv:1},{skill:"DEF",lv:1},{skill:"Mid-Air Jump",lv:1},],special:false},
			{name:"Air Hopper",skills:[{skill:"Stamina",lv:1},{skill:"Mid-Air Jump",lv:1},],special:false},
			{name:"Air Ride",skills:[{skill:"Mid-Air Jump",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"All Around",skills:[{skill:"Sword Master",lv:1},{skill:"Giving",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"All My Might",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"Stamina",lv:1},{skill:"Combo Master",lv:1},],special:false},
			{name:"Always Active",skills:[{skill:"[B] Firm Stand",lv:1},{skill:"Athlet",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Ammo Eater",skills:[{skill:"Devour Bullet Power",lv:5},{skill:"Oracle",lv:-4},],special:true},
			{name:"Anti-Ego Invitation",skills:[{skill:"Adrenalin Rush",lv:1},{skill:"Stamina Auto-Recovery",lv:-1},],special:false},
			{name:"Antibody",skills:[{skill:"Venom Resistance",lv:1},{skill:"Stun Resistance",lv:1},],special:false},
			{name:"Archer",skills:[{skill:"Oracle",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Ardent",skills:[{skill:"Combo Master",lv:1},{skill:"Oracle",lv:-1},],special:false},
			{name:"Art of Gun and Blade",skills:[{skill:"Ammo Master",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Artist's Arm",skills:[{skill:"Melee Attack Specialist",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Assist",skills:[{skill:"Item Speed",lv:1},{skill:"Item Effect",lv:1},{skill:"Item Effect Duration",lv:1},{skill:"[B] Recovery Item Speed",lv:1},],special:false},
			{name:"Astral Flow",skills:[{skill:"Frugal",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Attack Position",skills:[{skill:"Melee ATK",lv:1},{skill:"DEF",lv:1},],special:false},
			{name:"Attractive",skills:[{skill:"Covert Team",lv:1},{skill:"Acrobat Team",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Avenger",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"Item Effect",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Awareness",skills:[{skill:"Sensitive",lv:1},{skill:"Close Quarters DEF",lv:1},],special:false},
			{name:"Bacillus",skills:[{skill:"Debuff Stacking",lv:1},{skill:"Mid-Air Jump",lv:1},],special:false},
			{name:"Back Stance",skills:[{skill:"Exterminator",lv:1},{skill:"Knockback Distance",lv:1},],special:false},
			{name:"Backstab",skills:[{skill:"Hidden Attack",lv:1},{skill:"Debuff Stacking",lv:1},],special:false},
			{name:"Badger",skills:[{skill:"[B] Reduced Guard Damage",lv:1},{skill:"Reduced Guard Damage",lv:1},{skill:"Guard Speed",lv:1},{skill:"Guard Radius",lv:1},],special:false},
			{name:"Bait",skills:[{skill:"[B] Hate Up",lv:1},{skill:"HP",lv:1},{skill:"Close Quarters DEF",lv:1},],special:false},
			{name:"Ballistic Absorb",skills:[{skill:"DEF",lv:1},{skill:"JG OP Restore",lv:1},],special:false},
			{name:"Bannockburn",skills:[{skill:"[B] Stamina Auto-Recovery",lv:1},{skill:"Exterminator",lv:1},{skill:"JG Stamina Restore",lv:1},],special:false},
			{name:"Battle Amore",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Survival Instinct",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Battle Cry",skills:[{skill:"Oracle",lv:1},{skill:"Muted",lv:-1},],special:false},
			{name:"Battle Drums",skills:[{skill:"Prepared",lv:1},{skill:"Hate Up",lv:1},{skill:"Muted",lv:-1},],special:false},
			{name:"Battle Instinct",skills:[{skill:"Combo Master",lv:1},{skill:"Wild Instinct",lv:1},],special:false},
			{name:"Bayonet",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"[B] Gun ATK",lv:1},],special:false},
			{name:"Berserker",skills:[{skill:"[B] Melee ATK",lv:7},{skill:"[B] DEF",lv:-6},],special:true},
			{name:"Better or Worse",skills:[{skill:"Lucky",lv:1},{skill:"Enemy Calm",lv:-1},],special:false},
			{name:"Bewitched",skills:[{skill:"Guard Speed",lv:1},{skill:"Calm Breather",lv:1},{skill:"Adrenalin Rush",lv:1},],special:false},
			{name:"Bigger Bomb",skills:[{skill:"Oracle",lv:1},{skill:"Bomb Master",lv:1},],special:false},
			{name:"Bite and Draw",skills:[{skill:"Devour Oracle Absorb",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Blast Talk",skills:[{skill:"Disable Homing",lv:1},{skill:"Medic",lv:1},{skill:"Trigger Happy",lv:1},],special:false},
			{name:"Blitz",skills:[{skill:"Stamina",lv:1},{skill:"Combo Master",lv:1},{skill:"Athlet",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Blood Carnival",skills:[{skill:"Raging Blade",lv:1},{skill:"Raging Gun",lv:1},{skill:"Enemy Calm",lv:-1},],special:false},
			{name:"Blood Mind",skills:[{skill:"Oracle",lv:1},{skill:"Raging Gun",lv:1},],special:false},
			{name:"Blood Rule",skills:[{skill:"Raging Blade",lv:1},{skill:"JG Stamina Restore",lv:1},],special:false},
			{name:"Blood Soul",skills:[{skill:"Raging Blade",lv:1},{skill:"Raging Gun",lv:1},],special:false},
			{name:"Body and Mind",skills:[{skill:"HP",lv:1},{skill:"Oracle",lv:1},],special:false},
			{name:"Body of Steel",skills:[{skill:"Venom Resistance",lv:1},{skill:"Leak Resistance",lv:1},{skill:"Jamming Resistance",lv:1},{skill:"Stun Resistance",lv:1},],special:false},
			{name:"Bombardier",skills:[{skill:"[B] Gun ATK",lv:1},{skill:"Trigger Happy",lv:1},{skill:"Frugal",lv:1},{skill:"Gun ATK",lv:1},],special:false},
			{name:"Bravery Heart",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"Firm Stand",lv:1},{skill:"Close Quarters ATK",lv:1},],special:false},
			{name:"Brawler",skills:[{skill:"Close Quarters DEF",lv:1},{skill:"Close Quarters ATK",lv:1},],special:false},
			{name:"Breath of Battle",skills:[{skill:"Calm Breather",lv:1},{skill:"Close Quarters ATK",lv:1},],special:false},
			{name:"Breathless Absorb",skills:[{skill:"Devour Oracle Absorb",lv:1},{skill:"Calm Breather",lv:1},],special:false},
			{name:"Bullet Biter",skills:[{skill:"HP",lv:1},{skill:"Athlet",lv:1},{skill:"Gun Focus Specialis",lv:1},],special:false},
			{name:"Bullet Lava",skills:[{skill:"[B] Gun ATK",lv:1},{skill:"[B] Oracle Absorbtion",lv:1},{skill:"[B] DEF",lv:-1},],special:false},
			{name:"Bullet Storm",skills:[{skill:"Oracle",lv:1},{skill:"Frugal",lv:1},],special:false},
			{name:"Careful",skills:[{skill:"DEF",lv:1},{skill:"Item Effect",lv:1},],special:false},
			{name:"Carnage",skills:[{skill:"Sword Master",lv:1},{skill:"Wild Instinct",lv:1},{skill:"Trigger Happy",lv:1},],special:false},
			{name:"Castling",skills:[{skill:"Mid-Air Jump",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Cavalry",skills:[{skill:"DEF",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Charity",skills:[{skill:"Friendship",lv:1},{skill:"Beloved",lv:1},],special:false},
			{name:"Charms",skills:[{skill:"[B] DEF",lv:1},{skill:"DEF",lv:1},],special:false},
			{name:"Chaser",skills:[{skill:"Steps Master",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Chemist",skills:[{skill:"[B] Recovery Item Speed",lv:5},{skill:"[B] Item Effect",lv:5},{skill:"[B] Item Effect Duration",lv:5},{skill:"[B] DEF",lv:-4},],special:true},
			{name:"Command Decision",skills:[{skill:"[B] Prepared",lv:1},{skill:"Close Quarters DEF",lv:1},],special:false},
			{name:"Commander",skills:[{skill:"Charisma",lv:1},{skill:"Leak Resistance",lv:1},],special:false},
			{name:"Comprehensive",skills:[{skill:"[B] Prepared",lv:1},{skill:"[B] Combo Master",lv:1},],special:false},
			{name:"Conserve Strength",skills:[{skill:"Giving",lv:-1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Convicted",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Oracle Absorbtion",lv:1},{skill:"Wild Instinct",lv:1},],special:false},
			{name:"Cool Gunner",skills:[{skill:"Stun Resistance",lv:1},{skill:"Enemy Calm",lv:1},{skill:"Gun Focus Specialis",lv:1},],special:false},
			{name:"Countermeasures",skills:[{skill:"Stamina",lv:1},{skill:"Jamming Resistance",lv:1},],special:false},
			{name:"Crusader",skills:[{skill:"Medic",lv:1},{skill:"Aid Burst",lv:1},],special:false},
			{name:"Deadly Blow",skills:[{skill:"Stamina",lv:1},{skill:"Athlet",lv:1},{skill:"Melee Attack Specialist",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Defensive Blast",skills:[{skill:"DEF",lv:1},{skill:"Bomb Master",lv:1},],special:false},
			{name:"Defensive Drain",skills:[{skill:"DEF",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Defensive Instinct",skills:[{skill:"Guard Radius",lv:1},{skill:"Wild Instinct",lv:1},],special:false},
			{name:"Defensive Medic",skills:[{skill:"DEF",lv:1},{skill:"Aid Recovery Amount",lv:1},],special:false},
			{name:"Defensive Perception",skills:[{skill:"DEF",lv:1},{skill:"Sensitive",lv:1},],special:false},
			{name:"Delayed Poison",skills:[{skill:"Debuff Stacking",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Demigod",skills:[{skill:"HP",lv:1},{skill:"Giving",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Descrambler",skills:[{skill:"Leak Resistance",lv:1},{skill:"Jamming Resistance",lv:1},],special:false},
			{name:"Determination",skills:[{skill:"HP",lv:1},{skill:"Firm Stand",lv:1},{skill:"Exterminator",lv:1},],special:false},
			{name:"Devouring Shooter",skills:[{skill:"[B] Devour Bullet Quantity",lv:1},{skill:"Devour Bullet Power",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Divine Hand",skills:[{skill:"Aid Burst",lv:1},{skill:"Aid Recovery Amount",lv:1},],special:false},
			{name:"Divine Power",skills:[{skill:"Melee Attack Specialist",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Divisive Strike",skills:[{skill:"Close Quarters ATK",lv:1},{skill:"Melee Attack Specialist",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Dora Canon",skills:[{skill:"Trigger Happy",lv:1},{skill:"Melee ATK",lv:-1},],special:false},
			{name:"Double Fang",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Double Strike",skills:[{skill:"Melee ATK",lv:1},{skill:"[B] Melee ATK",lv:1},],special:false},
			{name:"Dragon Tooth",skills:[{skill:"DEF",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Drain",skills:[{skill:"JG OP Restore",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Earth and Wind",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"[B] Mid-Air Melee ATK",lv:1},],special:false},
			{name:"Embers",skills:[{skill:"Guard Radius",lv:1},{skill:"Step Distance",lv:1},{skill:"Muted",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Emperor's Time",skills:[{skill:"Stamina",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Enchanted Calm",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Enemy Calm",lv:1},],special:false},
			{name:"Energy Bite",skills:[{skill:"Stamina",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Energy Drive",skills:[{skill:"Aid Burst",lv:1},{skill:"HP",lv:1},],special:false},
			{name:"Enthrall",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Stamina",lv:1},{skill:"Beloved",lv:1},],special:false},
			{name:"Eternal Truth",skills:[{skill:"Disable Homing",lv:1},{skill:"Oracle Absorbtion",lv:1},],special:false},
			{name:"Expectation",skills:[{skill:"Oracle",lv:1},{skill:"Connoisseur",lv:1},],special:false},
			{name:"Experienced Gunner",skills:[{skill:"Gun Speed Specialist",lv:1},{skill:"Gun ATK",lv:1},],special:false},
			{name:"Exploding Attack",skills:[{skill:"Burst Duration",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Explosion",skills:[{skill:"Pyro Master",lv:1},{skill:"Bomb Master",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Eye of the Tiger",skills:[{skill:"Dexterous",lv:1},{skill:"Sensitive",lv:1},],special:false},
			{name:"Eyes on Enemy",skills:[{skill:"[B] Link Aid Strengthen",lv:1},{skill:"Sensitive",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Fairy Touch",skills:[{skill:"Medic",lv:1},{skill:"Aid Recovery Amount",lv:1},],special:false},
			{name:"Fast Acting",skills:[{skill:"HP",lv:1},{skill:"Item Effect Duration",lv:1},],special:false},
			{name:"Fatal Blow",skills:[{skill:"Wild Instinct",lv:1},{skill:"Survival Instinct",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Feather Hand",skills:[{skill:"Medic",lv:1},{skill:"Enemy Calm",lv:1},],special:false},
			{name:"Feather Knock",skills:[{skill:"Jamming Resistance",lv:1},{skill:"Enemy Calm",lv:1},],special:false},
			{name:"Field Manners",skills:[{skill:"Aid Recovery Amount",lv:1},{skill:"Giving",lv:1},{skill:"Mutual Burst",lv:1},{skill:"Muted",lv:-1},],special:false},
			{name:"Fine Reaction",skills:[{skill:"Item Effect",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"First Guard",skills:[{skill:"Guard Speed",lv:1},{skill:"Calm Breather",lv:1},],special:false},
			{name:"First Touch",skills:[{skill:"Reduced Guard Damage",lv:1},{skill:"Medic",lv:1},],special:false},
			{name:"Fixed Battery",skills:[{skill:"Frugal",lv:1},{skill:"Speed",lv:-1},],special:false},
			{name:"Fleet Foot",skills:[{skill:"Athlet",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Flying Attack",skills:[{skill:"Melee Attack Specialist",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Flying Shield",skills:[{skill:"Auto Guard",lv:1},{skill:"Mid-Air Jump",lv:1},],special:false},
			{name:"Foodie's Buddy",skills:[{skill:"God of Rare Drops",lv:1},{skill:"Giving",lv:1},{skill:"Devour HP Absorb",lv:1},{skill:"Gourmet",lv:-1},],special:false},
			{name:"Formidable Spirit",skills:[{skill:"[B] Firm Stand",lv:1},{skill:"[B] DEF",lv:1},],special:false},
			{name:"Formidable Wall",skills:[{skill:"Reduced Guard Damage",lv:1},{skill:"Firm Stand",lv:1},],special:false},
			{name:"Fountain of Energy",skills:[{skill:"[B] Stamina Auto-Recovery",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Fountain of Reason",skills:[{skill:"[B] Oracle Auto-Recovery",lv:1},{skill:"Oracle",lv:1},],special:false},
			{name:"Fountain of Youth",skills:[{skill:"[B] Automatic Recovery",lv:1},{skill:"HP",lv:1},{skill:"Burst Duration",lv:-1},],special:false},
			{name:"Front Line Officer",skills:[{skill:"Charisma",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Fuel Efficent",skills:[{skill:"Item Effect Duration",lv:1},{skill:"Dexterous",lv:-1},],special:false},
			{name:"Full Bore",skills:[{skill:"Trigger Happy",lv:1},{skill:"Dexterous",lv:-1},{skill:"Calm Breather",lv:-1},],special:false},
			{name:"Gale Formation",skills:[{skill:"Acrobat Team",lv:1},{skill:"Beloved",lv:1},],special:false},
			{name:"Ghostly Feet",skills:[{skill:"Sensitive",lv:1},{skill:"Muted",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Gladiator",skills:[{skill:"Stamina",lv:1},{skill:"Close Quarters DEF",lv:1},],special:false},
			{name:"Goddess Devotion",skills:[{skill:"God of Rare Drops",lv:1},{skill:"[B] DEF",lv:-1},],special:false},
			{name:"Gold Rush",skills:[{skill:"Share the Wealth",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Golden Dragon's Scale",skills:[{skill:"Rare Items for All",lv:1},{skill:"Melee Attack Speed",lv:-1},{skill:"Lucky",lv:1},],special:false},
			{name:"Golden Empire",skills:[{skill:"[B] Hate Control",lv:-1},{skill:"Athlet",lv:-1},{skill:"Connoisseur",lv:1},{skill:"Greedy",lv:1},],special:false},
			{name:"Good Morale",skills:[{skill:"Melee ATK",lv:1},{skill:"Charisma",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Good Taste",skills:[{skill:"[B] Gun ATK",lv:1},{skill:"Oracle",lv:1},{skill:"Athlet",lv:1},],special:false},
			{name:"Gourmand",skills:[{skill:"Gourmet",lv:1},{skill:"DEF",lv:-1},],special:false},
			{name:"Grand Reaper",skills:[{skill:"All Out Attack",lv:1},{skill:"DEF",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Granite",skills:[{skill:"[B] Stamina Auto-Recovery",lv:1},{skill:"Melee Attack Specialist",lv:1},{skill:"Frugal",lv:-1},],special:false},
			{name:"Great Highland",skills:[{skill:"Aid Burst",lv:1},{skill:"Mutual Burst",lv:1},{skill:"Close Quarters ATK",lv:1},],special:false},
			{name:"Great Luck",skills:[{skill:"Connoisseur",lv:1},{skill:"Lucky",lv:1},],special:false},
			{name:"Guarded Strike",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"DEF",lv:1},],special:false},
			{name:"Gun Master",skills:[{skill:"Gun Speed Specialist",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Gun Sabre",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Gun ATK",lv:1},],special:false},
			{name:"Gun's Soul",skills:[{skill:"[B] Gun ATK",lv:1},{skill:"Oracle",lv:1},{skill:"Oracle Absorbtion",lv:1},],special:false},
			{name:"Gunman",skills:[{skill:"Ammo Master",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Gunner's High",skills:[{skill:"Trigger Happy",lv:1},{skill:"DEF",lv:-1},],special:false},
			{name:"Gunner's Touch",skills:[{skill:"Aid Recovery Amount",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Gunner's Trick",skills:[{skill:"Athlet",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Gunner's Zone",skills:[{skill:"[B] Gun ATK",lv:1},{skill:"[B] Oracle Absorbtion",lv:1},],special:false},
			{name:"Gunsmith",skills:[{skill:"Gun Speed Specialist",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Guru",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Athlet",lv:1},],special:false},
			{name:"Half-stance",skills:[{skill:"DEF",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Hand Pocket",skills:[{skill:"Hidden Attack",lv:1},{skill:"Item Speed",lv:1},{skill:"Item Effect",lv:1},],special:false},
			{name:"Handicap",skills:[{skill:"HP",lv:1},{skill:"Item Speed",lv:1},{skill:"Item Effect Duration",lv:1},],special:false},
			{name:"Hard Dodge",skills:[{skill:"DEF",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Hard Puncher",skills:[{skill:"All Out Attack",lv:10},{skill:"Stamina",lv:7},{skill:"Melee Attack Specialist",lv:7},{skill:"Speed",lv:-5},],special:true},
			{name:"Hardened",skills:[{skill:"HP",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Haste",skills:[{skill:"Stamina",lv:1},{skill:"Athlet",lv:1},{skill:"Charged Ability Speed",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Hate Effect",skills:[{skill:"Hate Up",lv:1},],special:false},
			{name:"Hazardous",skills:[{skill:"Athlet",lv:1},{skill:"Critical Evoke Rate",lv:1},],special:false},
			{name:"Healing Hand",skills:[{skill:"Aid Recovery Amount",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Hellbent",skills:[{skill:"All Out Attack",lv:1},{skill:"Stamina Auto-Recovery",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Herald",skills:[{skill:"DEF",lv:1},{skill:"Exterminator",lv:1},],special:false},
			{name:"Hermit",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"High Output",skills:[{skill:"Charged Ability Speed",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Honor Student",skills:[{skill:"Enemy HP Vision",lv:1},{skill:"[B] Link Aid Strengthen",lv:1},{skill:"Medic",lv:1},],special:false},
			{name:"Immovable",skills:[{skill:"Firm Stand",lv:1},{skill:"JG Stamina Restore",lv:1},{skill:"Knockback Distance",lv:-1},],special:false},
			{name:"In-fighter",skills:[{skill:"Melee ATK",lv:1},{skill:"Knockback Distance",lv:-1},],special:false},
			{name:"Indignant",skills:[{skill:"Athlet",lv:1},{skill:"Just Guard Evoke Rate",lv:1},],special:false},
			{name:"Indomitable Spirit",skills:[{skill:"[B] DEF",lv:1},{skill:"[B] Firm Stand",lv:1},{skill:"Reduced Guard Damage",lv:1},],special:false},
			{name:"Inexhaustible",skills:[{skill:"Stamina",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Infinity",skills:[{skill:"Frugal",lv:1},{skill:"Athlet",lv:1},],special:false},
			{name:"Inspiration",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Internal Alchemy",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Invisible Shield",skills:[{skill:"[B] Prepared",lv:1},{skill:"[B] Reduced Guard Damage",lv:1},],special:false},
			{name:"Iron Body",skills:[{skill:"DEF",lv:1},{skill:"Stun Resistance",lv:1},],special:false},
			{name:"Iron Wind",skills:[{skill:"Combo Master",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Ironman",skills:[{skill:"Athlet",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Item Master",skills:[{skill:"Item Speed",lv:1},{skill:"Item Effect",lv:1},{skill:"Item Effect Duration",lv:1},],special:false},
			{name:"Jade Feather",skills:[{skill:"Athlet",lv:1},{skill:"Burst Duration",lv:1},{skill:"Stun Resistance",lv:-1},],special:false},
			{name:"Just Reward",skills:[{skill:"Share the Wealth",lv:1},{skill:"Connoisseur",lv:1},{skill:"Aid Burst",lv:1},],special:false},
			{name:"Kind Mother's Hand",skills:[{skill:"Medic",lv:1},{skill:"Aid Recovery Amount",lv:1},{skill:"Aid Burst",lv:1},],special:false},
			{name:"Large Shield",skills:[{skill:"Reduced Guard Damage",lv:1},{skill:"Guard Radius",lv:1},],special:false},
			{name:"Last Minute Save",skills:[{skill:"Firm Stand",lv:1},{skill:"Item Speed",lv:1},],special:false},
			{name:"Last Stand",skills:[{skill:"Wrath of Revenge",lv:10},{skill:"Firm Stand",lv:10},{skill:"Charisma",lv:-6},],special:true},
			{name:"Lazarus",skills:[{skill:"[B] Heal Bullet OP Use",lv:1},{skill:"Aid Recovery Amount",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Leap",skills:[{skill:"Stamina",lv:1},{skill:"Step Distance",lv:1},{skill:"Athlet",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Leap Fang",skills:[{skill:"Melee Spcial ATK Stam.",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Like a Weed",skills:[{skill:"HP",lv:1},{skill:"Combo Master",lv:1},{skill:"Prepared",lv:1},],special:false},
			{name:"Limit Maneuver",skills:[{skill:"Giving",lv:1},{skill:"Survival Instinct",lv:1},{skill:"Wild Instinct",lv:1},],special:false},
			{name:"Link Aid Recover Amnt",skills:[{skill:"Aid Recovery Amount",lv:1},],special:false},
			{name:"Lively",skills:[{skill:"[B] Stamina Auto-Recovery",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Logistical Support",skills:[{skill:"[B] Oracle Auto-Recovery",lv:1},{skill:"Medic",lv:1},{skill:"Aid Recovery Amount",lv:1},{skill:"Item Effect",lv:1},],special:false},
			{name:"Loki",skills:[{skill:"[B] Devour Bullet Quantity",lv:10},{skill:"[B] Gun ATK",lv:7},{skill:"[B] DEF",lv:-6},],special:true},
			{name:"Loose Change",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Item Speed",lv:1},],special:false},
			{name:"Mainstay",skills:[{skill:"[B] Stamina Auto-Recovery",lv:1},{skill:"Stamina",lv:1},{skill:"Charisma",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Mana Drinker",skills:[{skill:"[B] Oracle Absorbtion",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Marksmanship",skills:[{skill:"Gun Speed Specialist",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Master Fencer",skills:[{skill:"Sword Master",lv:1},{skill:"Survival Instinct",lv:1},],special:false},
			{name:"Mastery",skills:[{skill:"JG HP Restore",lv:1},{skill:"JG Stamina Restore",lv:1},{skill:"JG OP Restore",lv:1},],special:false},
			{name:"Medical Support",skills:[{skill:"[B] Heal Bullet OP Use",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Medical Trainer",skills:[{skill:"[B] Link Aid Strengthen",lv:1},{skill:"Aid Burst",lv:1},{skill:"Aid Recovery Amount",lv:1},{skill:"Medic",lv:1},],special:false},
			{name:"Melee Upgrade A",skills:[{skill:"Combo Master",lv:10},{skill:"Oracle",lv:-3},],special:true},
			{name:"Melee Upgrade B",skills:[{skill:"All Out Attack",lv:10},{skill:"Oracle",lv:-4},],special:true},
			{name:"Melee Upgrade C",skills:[{skill:"Calm Breather",lv:7},{skill:"Adrenalin Rush",lv:7},{skill:"Oracle",lv:-6},],special:true},
			{name:"Menace",skills:[{skill:"Bind",lv:1},{skill:"[B] Debuff Stacking",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Meteor Shooter",skills:[{skill:"[B] Gun ATK",lv:1},{skill:"[B] Mid-Air Melee ATK",lv:1},],special:false},
			{name:"Mighty Hand",skills:[{skill:"Aid Burst",lv:1},{skill:"Item Speed",lv:1},],special:false},
			{name:"Mind Bite",skills:[{skill:"Oracle",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Miracle's Price",skills:[{skill:"[B] Hate Up",lv:1},{skill:"Greedy",lv:1},{skill:"[B] Hate Control",lv:-1},],special:false},
			{name:"Mob Control",skills:[{skill:"Exterminator",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Monk",skills:[{skill:"[B] Recovery Item Speed",lv:4},{skill:"[B] Melee ATK",lv:4},{skill:"[B] Heal Bullet OP Use",lv:3},{skill:"[B] Gun ATK",lv:-3},],special:true},
			{name:"Natural Instincts",skills:[{skill:"Survival Instinct",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Natural State",skills:[{skill:"Stamina",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Nerves of Steel",skills:[{skill:"[B] Guard Stamina",lv:1},{skill:"[B] Reduced Guard Damage",lv:1},],special:false},
			{name:"Night of the Lion",skills:[{skill:"Acrobat Team",lv:1},{skill:"Exaggerated",lv:1},{skill:"[B] Hate Control",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Nimble",skills:[{skill:"Stamina",lv:1},{skill:"Item Speed",lv:1},],special:false},
			{name:"Ninja's Taste",skills:[{skill:"[B] Debuff Stacking",lv:1},{skill:"[B] Super Muted",lv:1},],special:false},
			{name:"Nirvana",skills:[{skill:"[B] Oracle Absorbtion",lv:1},{skill:"[B] Oracle Auto-Recovery",lv:1},],special:false},
			{name:"Nonaggression",skills:[{skill:"[B] Hate Control",lv:1},{skill:"Guard Speed",lv:1},],special:false},
			{name:"Observant",skills:[{skill:"Enemy HP Vision",lv:1},{skill:"Close Quarters DEF",lv:1},],special:false},
			{name:"Offensive Defense",skills:[{skill:"JG Stamina Restore",lv:1},{skill:"JG HP Restore",lv:1},],special:false},
			{name:"One Against Many",skills:[{skill:"Combo Master",lv:1},{skill:"Exterminator",lv:1},],special:false},
			{name:"Onslaught",skills:[{skill:"All Out Attack",lv:1},{skill:"DEF",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Open Air",skills:[{skill:"Oracle",lv:1},{skill:"Oracle Absorbtion",lv:1},],special:false},
			{name:"Open-minded",skills:[{skill:"Gourmet",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Oracle Keeper",skills:[{skill:"[B] Oracle Auto-Recovery",lv:1},{skill:"[B] Oracle Absorbtion",lv:1},{skill:"Oracle Absorbtion",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Out In Out",skills:[{skill:"Combo Master",lv:1},{skill:"Knockback Distance",lv:1},],special:false},
			{name:"Over Action",skills:[{skill:"Enemy HP Vision",lv:1},{skill:"Exaggerated",lv:1},],special:false},
			{name:"Overpower",skills:[{skill:"[B] Firm Stand",lv:1},{skill:"HP",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Overrun",skills:[{skill:"[B] Firm Stand",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Parrying Fang",skills:[{skill:"JG Stamina Restore",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Passionate Leader",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Peek-a-boo",skills:[{skill:"Guard Speed",lv:1},{skill:"HP",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Phantasm",skills:[{skill:"Covert Team",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Physical Keeper",skills:[{skill:"Athlet",lv:1},{skill:"Steps Master",lv:1},{skill:"Stamina Auto-Recovery",lv:1},{skill:"Calm Breather",lv:1},],special:false},
			{name:"Physician",skills:[{skill:"[B] Recovery Item Speed",lv:4},{skill:"[B] Gun ATK",lv:4},{skill:"[B] Heal Bullet OP Use",lv:4},{skill:"Melee ATK",lv:-3},],special:true},
			{name:"Picking a Fight",skills:[{skill:"Stamina",lv:1},{skill:"Charisma",lv:1},{skill:"Close Quarters ATK",lv:1},],special:false},
			{name:"Poison Resistance",skills:[{skill:"Venom Resistance",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Poison Snake",skills:[{skill:"Debuff Stacking",lv:1},{skill:"Sensitive",lv:1},],special:false},
			{name:"Poker Face",skills:[{skill:"Stun Resistance",lv:1},{skill:"Enemy Calm",lv:1},],special:false},
			{name:"Power Walker",skills:[{skill:"HP",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Preemptive Defense",skills:[],special:false},
			{name:"Preventative Measures",skills:[{skill:"DEF",lv:1},{skill:"Guard Speed",lv:1},],special:false},
			{name:"Provocation",skills:[{skill:"Covert Team",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Quick Action",skills:[{skill:"Gun Speed Specialist",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Quick Change",skills:[{skill:"Stamina",lv:1},{skill:"Gun Speed Specialist",lv:1},],special:false},
			{name:"Quick Work",skills:[{skill:"Stamina",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Quick Worker",skills:[{skill:"Dexterous",lv:1},{skill:"Beloved",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Rabid Rescue",skills:[{skill:"Aid Burst",lv:1},{skill:"Muted",lv:-1},],special:false},
			{name:"Radiance",skills:[{skill:"All Out Attack",lv:1},{skill:"Sword Master",lv:1},{skill:"[B] Oracle Absorbtion",lv:1},],special:false},
			{name:"Raging Blade A",skills:[{skill:"Raging Blade",lv:5},{skill:"Melee ATK",lv:-4},{skill:"Gun ATK",lv:-4},],special:true},
			{name:"Raging Blade B",skills:[{skill:"Raging Blade",lv:7},{skill:"Melee ATK",lv:-6},{skill:"Gun ATK",lv:-6},],special:true},
			{name:"Raging Gun A",skills:[{skill:"Raging Gun",lv:5},{skill:"Melee ATK",lv:-4},{skill:"Gun ATK",lv:-4},],special:true},
			{name:"Raging Gun B",skills:[{skill:"Raging Gun",lv:7},{skill:"Melee ATK",lv:-6},{skill:"Gun ATK",lv:-6},],special:true},
			{name:"Raider",skills:[{skill:"Athlet",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Rakshasa",skills:[{skill:"All Out Attack",lv:1},{skill:"Wild Instinct",lv:1},{skill:"Adrenalin Rush",lv:1},],special:false},
			{name:"Rapidfire",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Combo Master",lv:1},],special:false},
			{name:"Rare Item Rewards",skills:[{skill:"Rare Items for All",lv:1},],special:false},
			{name:"Reckless Blade",skills:[{skill:"Sword Master",lv:1},{skill:"DEF",lv:-1},],special:false},
			{name:"Reconnaissance Unit",skills:[{skill:"Sensitive",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Recover Walker",skills:[{skill:"Aid Recovery Amount",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Red Guard",skills:[{skill:"Firm Stand",lv:1},{skill:"Burst Duration",lv:1},{skill:"Speed",lv:-1},],special:false},
			{name:"Red-Hot Skin",skills:[{skill:"HP",lv:1},{skill:"Reduced Guard Damage",lv:1},{skill:"Combo Master",lv:1},],special:false},
			{name:"Reflexes",skills:[{skill:"Guard Speed",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Reincarnation",skills:[{skill:"[B] Melee ATK HP Absorb",lv:1},{skill:"[B] Oracle Auto-Recovery",lv:1},],special:false},
			{name:"Renounce the Flesh",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"[B] Reduced Guard Damage",lv:1},],special:false},
			{name:"Replenishment",skills:[{skill:"Oracle",lv:1},{skill:"Muted",lv:1},{skill:"Frugal",lv:1},{skill:"Gun ATK",lv:1},],special:false},
			{name:"Rescue",skills:[{skill:"HP",lv:1},{skill:"Medic",lv:1},],special:false},
			{name:"Reserved",skills:[{skill:"[B] Guard Stamina",lv:1},{skill:"[B] Oracle Absorbtion",lv:1},],special:false},
			{name:"Resolution",skills:[{skill:"Prepared",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Return from the Void",skills:[{skill:"Calm Breather",lv:1},{skill:"Adrenalin Rush",lv:1},],special:false},
			{name:"Returner",skills:[{skill:"JG HP Restore",lv:1},{skill:"Close Quarters DEF",lv:1},],special:false},
			{name:"Revival",skills:[{skill:"Firm Stand",lv:1},{skill:"Item Effect",lv:1},],special:false},
			{name:"Reviver",skills:[{skill:"[B] Link Aid Strengthen",lv:1},{skill:"Giving",lv:1},{skill:"Item Speed",lv:1},],special:false},
			{name:"Rock Solid",skills:[{skill:"[B] Guard Stamina",lv:1},{skill:"Guard Radius",lv:1},],special:false},
			{name:"Rogue",skills:[{skill:"Hidden Attack",lv:1},{skill:"[B] Super Muted",lv:1},{skill:"Muted",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Savior",skills:[{skill:"[B] Devour Bullet Quantity",lv:1},{skill:"Aid Recovery Amount",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Scamper",skills:[{skill:"Steps Master",lv:1},{skill:"Calm Breather",lv:1},],special:false},
			{name:"Scorpion's Sting",skills:[{skill:"Disable Homing",lv:1},{skill:"Hidden Attack",lv:1},],special:false},
			{name:"Seclusion",skills:[{skill:"Oracle",lv:1},{skill:"Muted",lv:1},{skill:"Gun ATK",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Sector",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Self Control",skills:[{skill:"Stamina",lv:1},{skill:"Giving",lv:-1},],special:false},
			{name:"Serpent's Hiss",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"Burst Duration",lv:1},{skill:"Aid Burst",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Seven-League Boots",skills:[{skill:"Step Distance",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Shadow Knock",skills:[{skill:"Debuff Stacking",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Shadow Vizier",skills:[{skill:"Charisma",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Shadow's End",skills:[{skill:"Step Distance",lv:1},{skill:"Athlet",lv:1},{skill:"Steps Master",lv:1},{skill:"Mid-Air Jump",lv:1},],special:false},
			{name:"Signal of Engagement",skills:[{skill:"Laser Master",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Silencer",skills:[{skill:"Muted",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Silent Bomber",skills:[{skill:"Bomb Master",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Silent Butterfly",skills:[{skill:"Oracle",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Silent Killing",skills:[{skill:"Hidden Attack",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Silver Arm",skills:[{skill:"Stamina",lv:1},{skill:"JG Stamina Restore",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Single-minded",skills:[{skill:"Leak Resistance",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Sir Wallace",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Friendship",lv:1},{skill:"Charged Ability Speed",lv:1},],special:false},
			{name:"Slow Back",skills:[{skill:"Devour Bullet Power",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Snarling Beast",skills:[{skill:"Venom",lv:1},{skill:"DEF",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Sniping",skills:[{skill:"Laser Master",lv:1},{skill:"Muted",lv:1},],special:false},
			{name:"Soothing Hand",skills:[{skill:"[B] Heal Bullet OP Use",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Soul Eater",skills:[{skill:"Devour Bullet Power",lv:1},{skill:"[B] Devour Bullet Quantity",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Soul Repose",skills:[{skill:"HP",lv:1},{skill:"Enemy Calm",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Soul Resist",skills:[{skill:"HP",lv:1},{skill:"Leak Resistance",lv:1},],special:false},
			{name:"Spin Attack",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"HP",lv:1},{skill:"Aid Burst",lv:1},],special:false},
			{name:"Spirit Bullets",skills:[{skill:"Devour Bullet Power",lv:1},{skill:"[B] Oracle Auto-Recovery",lv:1},],special:false},
			{name:"Spirit Roar",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Prepared",lv:1},{skill:"Muted",lv:-1},],special:false},
			{name:"Spirit Technique",skills:[{skill:"Oracle",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Split-second Attack",skills:[{skill:"Charged Ability Speed",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Steadfast",skills:[{skill:"Leak Resistance",lv:1},{skill:"Jamming Resistance",lv:1},{skill:"Stun Resistance",lv:1},],special:false},
			{name:"Steal Step",skills:[{skill:"Devour HP Absorb",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Steel Bite",skills:[{skill:"HP",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Stern Mother's Heart",skills:[{skill:"[B] Automatic Recovery",lv:1},{skill:"DEF",lv:1},{skill:"HP",lv:1},],special:false},
			{name:"Stone-eyed",skills:[{skill:"Reduced Guard Damage",lv:1},{skill:"Enemy HP Vision",lv:1},],special:false},
			{name:"Storm and Stress",skills:[{skill:"Melee Attack Specialist",lv:1},{skill:"Combo Master",lv:1},],special:false},
			{name:"Stout Fight",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Prepared",lv:1},{skill:"Dexterous",lv:-1},],special:false},
			{name:"Strategic Blow",skills:[{skill:"All Out Attack",lv:1},{skill:"Athlet",lv:1},],special:false},
			{name:"Sunburst",skills:[{skill:"[B] Automatic Recovery",lv:1},{skill:"Melee Attack Speed",lv:-1},{skill:"Firm Stand",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Superior Command",skills:[{skill:"HP",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Suppressive Fire",skills:[{skill:"DEF",lv:1},{skill:"Ammo Master",lv:1},],special:false},
			{name:"Sure Shooter",skills:[{skill:"Laser Master",lv:1},{skill:"Jamming Resistance",lv:1},],special:false},
			{name:"Surprise Attack",skills:[{skill:"Hidden Attack",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Surt",skills:[{skill:"[B] Firm Stand",lv:10},{skill:"[B] DEF",lv:7},{skill:"[B] Hate Up",lv:6},],special:true},
			{name:"Sweeper",skills:[{skill:"Exterminator",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Swift Strike",skills:[{skill:"Hidden Attack",lv:1},{skill:"Hate Up",lv:-1},],special:false},
			{name:"Sword Dancer",skills:[{skill:"Combo Master",lv:1},{skill:"Melee ATK",lv:1},],special:false},
			{name:"Symmetry",skills:[{skill:"Oracle Absorbtion",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Sympathy",skills:[{skill:"[B] Heal Bullet OP Use",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Team Force",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Mutual Burst",lv:1},],special:false},
			{name:"Tenacious",skills:[{skill:"DEF",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Tern Dress",skills:[{skill:"Enemy Calm",lv:1},{skill:"Aid Burst",lv:1},{skill:"Giving",lv:-1},],special:false},
			{name:"Theory of Life",skills:[{skill:"Stamina",lv:1},{skill:"Guard Radius",lv:1},{skill:"Exterminator",lv:1},],special:false},
			{name:"Therapist",skills:[{skill:"[B] Heal Bullet OP Use",lv:1},{skill:"Devour Oracle Absorb",lv:1},],special:false},
			{name:"Thirst",skills:[{skill:"Athlet",lv:1},{skill:"Total Evoke Rate",lv:1},],special:false},
			{name:"Tit for Tat",skills:[{skill:"Devour Bullet Power",lv:1},{skill:"Burst Duration",lv:1},{skill:"Dexterous",lv:1},],special:false},
			{name:"Tool Use",skills:[{skill:"Item Speed",lv:1},{skill:"Item Effect",lv:1},],special:false},
			{name:"Touchdown",skills:[{skill:"Melee Spcial ATK Stam.",lv:1},{skill:"Knockback Distance",lv:1},],special:false},
			{name:"Tough Cookie",skills:[{skill:"Stamina",lv:1},{skill:"Firm Stand",lv:1},{skill:"Stamina Auto-Recovery",lv:1},],special:false},
			{name:"Toughness",skills:[{skill:"Athlet",lv:1},{skill:"JG Stamina Restore",lv:1},],special:false},
			{name:"Trance",skills:[{skill:"[B] Sensitive",lv:1},{skill:"[B] Total Debuff Resistance",lv:1},],special:false},
			{name:"Tranquility",skills:[{skill:"Enemy Calm",lv:1},],special:false},
			{name:"Transcendent",skills:[{skill:"Burst Duration",lv:1},{skill:"Firm Stand",lv:1},{skill:"HP",lv:1},],special:false},
			{name:"Triple Time",skills:[{skill:"HP",lv:1},{skill:"Oracle",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Troubled Heroes ",skills:[{skill:"Exterminator",lv:1},{skill:"Close Quarters ATK",lv:1},{skill:"Close Quarters DEF",lv:1},{skill:"Sensitive",lv:1},],special:false},
			{name:"Unchained",skills:[{skill:"Mid-Air Jump",lv:1},{skill:"Stun Resistance",lv:1},],special:false},
			{name:"Unlimited",skills:[{skill:"Athlet",lv:1},{skill:"Calm Breather",lv:1},],special:false},
			{name:"Unsheathed",skills:[{skill:"[B] Melee ATK",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Vanguard",skills:[{skill:"All Out Attack",lv:1},{skill:"DEF",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Vantage Point",skills:[{skill:"DEF",lv:7},{skill:"Charisma",lv:7},{skill:"HP",lv:-6},{skill:"Oracle",lv:-6},],special:true},
			{name:"Venom Walker",skills:[{skill:"Athlet",lv:1},{skill:"Venom Resistance",lv:1},],special:false},
			{name:"Vitality Keeper",skills:[{skill:"[B] Melee ATK HP Absorb",lv:1},{skill:"[B] Automatic Recovery",lv:1},{skill:"JG HP Restore",lv:1},{skill:"Devour HP Absorb",lv:1},],special:false},
			{name:"Vive",skills:[{skill:"Stamina Auto-Recovery",lv:1},{skill:"Stamina",lv:1},],special:false},
			{name:"Wall",skills:[{skill:"Stamina",lv:1},{skill:"Guard Radius",lv:1},],special:false},
			{name:"War Cry",skills:[{skill:"Melee ATK",lv:1},{skill:"Muted",lv:-1},],special:false},
			{name:"Warrior's Blessing",skills:[{skill:"Wrath of Revenge",lv:1},{skill:"Giving",lv:1},{skill:"Burst Duration",lv:1},],special:false},
			{name:"Warrior's Trance",skills:[{skill:"Adrenalin Rush",lv:1},{skill:"Steps Master",lv:1},],special:false},
			{name:"Warrior's Will",skills:[{skill:"Prepared",lv:1},{skill:"Hate Up",lv:1},],special:false},
			{name:"Warrior's Wit",skills:[{skill:"Hate Up",lv:1},{skill:"Melee Spcial ATK Stam.",lv:1},],special:false},
			{name:"Way of Defense",skills:[{skill:"HP",lv:1},{skill:"Reduced Guard Damage",lv:1},],special:false},
			{name:"Way of the Blade",skills:[{skill:"Stamina",lv:1},{skill:"Melee Attack Specialist",lv:1},],special:false},
			{name:"Whirling Blade",skills:[{skill:"Sword Master",lv:10},{skill:"Combo Master",lv:10},{skill:"Athlet",lv:-6},{skill:"Calm Breather",lv:-6},],special:true},
			{name:"White Fox Dance",skills:[{skill:"Guard Radius",lv:1},{skill:"Combo Master",lv:1},],special:false},
			{name:"Wild Hunt",skills:[{skill:"God of Rare Drops",lv:1},{skill:"Covert Team",lv:1},{skill:"Acrobat Team",lv:1},{skill:"Charisma",lv:1},],special:false},
			{name:"Wild Wolves",skills:[{skill:"[B] Mid-Air Melee ATK",lv:1},{skill:"Melee ATK",lv:1},{skill:"Charisma",lv:1},],special:false}
		]
	},
	items: {
		melee: [],
		gun: [],
		shield: [],
		controlUnit: [],
		upgradePart: [],
		linkSupportDevice: [],
		top: [],
		bottom: [],
		consumables: [],
		trade: [],
		material: []
	},
	aragamis: [
		{
			name:                "Move Target (Night Hollow)",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "",
			drops:               []
		},
		{
			name:                "Move Target (Ogretail)",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Body (Sunder/Pierce)"
			],
			bonds:               [],
			itemPrefix:          "Simulated",
			drops:               []
		},
		{
			name:                "Dreadpike",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Beetle",
			drops:               []
		},
		{
			name:                "Night Hollow",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Dryad",
			drops:               []
		},
		{
			name:                "Ogretail",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Body (Sunder/Pierce)"
			],
			bonds:               [],
			itemPrefix:          "Ogre",
			drops:               [
				{
					item: "Aragami Bone Chip",
					rates: [0.25, 0.264, 0.277, 0.3, 0.3, 0.3, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					"item": "Aragami Claw",
					rates: [0.23, 0.264, 0.277, 0.27, 0.27, 0.27, 0.27, 0.27, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					"item": "Ogre Fang",
					rates: [0.22, 0.142, 0.149, 0.05, 0.05, 0.05, 0.05, 0.05, 0, 0, 0, 0, 0, 0, 0, 0.27]
				},
				{
					"item": "Ogre Tail",
					rates: [0.15, 0.142, 0.099, 0.15, 0.15, 0.15, 0.15, 0.15, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				{
					"item": "Cinnabar",
					rates: [0.08, 0.113, 0.119, 0.15, 0.15, 0.15, 0.15, 0.15, 0, 0, 0, 0, 0, 0, 0, 0.15]
				},
				{
					"item": "Ogre Helm",
					rates: [0.07, 0.075, 0.079, 0.08, 0.08, 0.08, 0.08, 0.08, 0, 0, 0, 0, 0, 0, 0, 0.3]
				},
				{
					"item": "Aragami Bone",
					rates: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15]
				},
				{
					"item": "Ogre Sharp Tail",
					rates: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.08]
				},
				{
					"item": "Ogre Sharp Helm",
					rates: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.05]
				}
			]
		},
		{
			name:                "Fallen Ogretail",
			size:                "S",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze",
				"Spark"
			],
			attributeResistance: [
				"Freeze",
				"Divine"
			],
			weakspots:           [
				"Body (Sunder/Pierce)"
			],
			bonds:               [],
			itemPrefix:          "Freeze Ogre",
			drops:               []
		},
		{
			name:                "Vajratail (Blaze)",
			size:                "S",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Blaze Ogre",
			drops:               []
		},
		{
			name:                "Vajratail (Spark)",
			size:                "S",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Spark Ogre",
			drops:               []
		},
		{
			name:                "Zhou Wang",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [],
			weakspots:           [
				"Body (Sunder/Pierce)"
			],
			bonds:               [],
			itemPrefix:          "",
			drops:               []
		},
		{
			name:                "Zygote",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Angel",
			drops:               []
		},
		{
			name:                "Fallen Zygote (Blaze)",
			size:                "S",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Blaze",
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Lucifer",
			drops:               []
		},
		{
			name:                "Fallen Zygote (Freeze)",
			size:                "S",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Lucifer",
			drops:               []
		},
		{
			name:                "Fallen Zygote (Spark)",
			size:                "S",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Lucifer",
			drops:               []
		},
		{
			name:                "Cocoon Maiden",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Pixie",
			drops:               []
		},
		{
			name:                "Fallen Cocoon Maiden (Blaze)",
			size:                "S",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Blaze",
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Blaze Pixie",
			drops:               []
		},
		{
			name:                "Fallen Cocoon Maiden (Freeze)",
			size:                "S",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Freeze Pixie",
			drops:               []
		},
		{
			name:                "Fallen Cocoon Maiden (Spark)",
			size:                "S",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Spark",
				"Divine"
			],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Spark Pixie",
			drops:               []
		},
		{
			name:                "Silky",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "Ghost Garb",
			drops:               []
		},
		{
			name:                "Abaddon",
			size:                "S",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [],
			bonds:               [],
			itemPrefix:          "A/F-Ticket",
			drops:               []
		},
		{
			name:                "Kongou",
			size:                "M",
			attribute:           [],
			attributeWeakness:   [
				"Spark"
			],
			attributeResistance: [
				"Freeze"
			],
			weakspots:           [
				"Tail"
			],
			bonds:               [
				"Face",
				"Torso",
				"Tail"
			],
			itemPrefix:          "Simian",
			drops:               []
		},
		{
			name:                "Fallen Kongou (Freeze)",
			size:                "M",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Arms",
				"Feet"
			],
			bonds:               [
				"Face",
				"Pipe",
				"Tail"
			],
			itemPrefix:          "Wukong",
			drops:               []
		},
		{
			name:                "Fierce Kongou (Spark)",
			size:                "M",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Arms",
				"Feet"
			],
			bonds:               [
				"Plume",
				"Back",
				"Arms"
			],
			itemPrefix:          "Hanuman",
			drops:               []
		},
		{
			name:                "Rakshasa Kongou",
			size:                "M",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Blaze"
			],
			weakspots:           [
				"?"
			],
			bonds:               [
				"Head",
				"Boost Hammer Portion",
				"Tail"
			],
			itemPrefix:          "Hominid",
			drops:               []
		},
		{
			name:                "Gboro-Gboro",
			size:                "M",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Spark"
			],
			attributeResistance: [
				"Freeze",
				"Divine"
			],
			weakspots:           [
				"Torso",
				"Arm Fins"
			],
			bonds:               [
				"Fang",
				"Torso",
				"Back Fin"
			],
			itemPrefix:          "Draconic",
			drops:               []
		},
		{
			name:                "Fallen Gboro-Gboro (Blaze)",
			size:                "M",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze"
			],
			weakspots:           [
				"Unbound Cannon"
			],
			bonds:               [
				"Cannon",
				"Back Fin",
				"Tail Fin"
			],
			itemPrefix:          "Wyrm",
			drops:               []
		},
		{
			name:                "Fallen Gboro-Gboro (Freeze)",
			size:                "M",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze"
			],
			weakspots:           [
				"Unbound Cannon"
			],
			bonds:               [
				"Cannon",
				"Back Fin",
				"Tail Fin"
			],
			itemPrefix:          "Basilisk",
			drops:               []
		},
		{
			name:                "Golden Gboro-Gboro",
			size:                "M",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Everything"
			],
			bonds:               [
				"Cannon",
				"Back Fin",
				"Tail Fin"
			],
			itemPrefix:          "All Salvageable Materials (lowlevel)",
			drops:               []
		},
		{
			name:                "Chi-You",
			size:                "M",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Head",
				"Fist"
			],
			bonds:               [
				"Head",
				"Arm Wings",
				"Lower Body"
			],
			itemPrefix:          "Avian",
			drops:               []
		},
		{
			name:                "Fallen Chi-You (Spark)",
			size:                "M",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Head",
				"Fist"
			],
			bonds:               [
				"Head",
				"Arm Wings",
				"Lower Body"
			],
			itemPrefix:          "Raven",
			drops:               []
		},
		{
			name:                "Sekhmet",
			size:                "M",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Spark"
			],
			weakspots:           [
				"Head",
				"Fist"
			],
			bonds:               [
				"Head",
				"Arm Wings",
				"Lower Body"
			],
			itemPrefix:          "Garuda(9), Phoenix(10)",
			drops:               []
		},
		{
			name:                "Yan Zhi",
			size:                "M",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Arm Wings",
				"Lower Body"
			],
			itemPrefix:          "Siren",
			drops:               []
		},
		{
			name:                "Kabbala Kabbala",
			size:                "M",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Nose"
			],
			bonds:               [
				"Nose",
				"Arm Fins",
				"Tail Fin"
			],
			itemPrefix:          "Ritual",
			drops:               []
		},
		{
			name:                "Yaksha",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Pauldrons"
			],
			itemPrefix:          "Yaksha",
			drops:               []
		},
		{
			name:                "Yaksha Raja",
			size:                "M",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Shoulder",
				"Claws"
			],
			itemPrefix:          "Wight",
			drops:               []
		},
		{
			name:                "Yaksha Tivra",
			size:                "M",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Spark",
				"Divine"
			],
			weakspots:           [],
			bonds:               [
				"Head",
				"Shoulder",
				"Buster Blade Claws"
			],
			itemPrefix:          "Lemures",
			drops:               []
		},
		{
			name:                "Ukonvasara",
			size:                "M",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Unbound Turbine",
				"Head",
				"Tail"
			],
			bonds:               [
				"Head",
				"Turbine",
				"Tail"
			],
			itemPrefix:          "Hunger, Reptilian",
			drops:               []
		},
		{
			name:                "Ontovasara",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Turbine",
				"Tail"
			],
			itemPrefix:          "Eusuchian",
			drops:               []
		},
		{
			name:                "Vajra",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Tail (Pierce)",
				"Head (Crush)"
			],
			bonds:               [
				"Head",
				"Front Legs",
				"Tail"
			],
			itemPrefix:          "Chimera",
			drops:               []
		},
		{
			name:                "Gold Vajra",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Tail (Pierce)",
				"Head (Crush)"
			],
			bonds:               [
				"Head",
				"Front Legs",
				"Cape"
			],
			itemPrefix:          "Sphinx",
			drops:               []
		},
		{
			name:                "Dyaus Pita",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Unbound Front Leg"
			],
			bonds:               [
				"Head",
				"Front Legs",
				"Cape"
			],
			itemPrefix:          "Emperor",
			drops:               []
		},
		{
			name:                "Prithvi Mata",
			size:                "L",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze",
				"Divine"
			],
			attributeResistance: [
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Head",
				"Tail"
			],
			bonds:               [
				"Head",
				"Shoulder",
				"Torso"
			],
			itemPrefix:          "Royal",
			drops:               []
		},
		{
			name:                "Ravana",
			size:                "L",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Blaze",
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Torso",
				"Front Legs"
			],
			itemPrefix:          "Flame Beast",
			drops:               []
		},
		{
			name:                "Sariel",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Skirt",
				"Unbound Legs"
			],
			bonds:               [
				"Head",
				"Skirt",
				"Legs"
			],
			itemPrefix:          "Goddess",
			drops:               []
		},
		{
			name:                "Fallen Sariel",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [
				"Skirt",
				"Unbound Legs"
			],
			bonds:               [
				"Head",
				"Skirt",
				"Legs"
			],
			itemPrefix:          "Witch",
			drops:               []
		},
		{
			name:                "Rufus Caligula",
			size:                "L",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze",
				"Spark"
			],
			attributeResistance: [
				"Freeze",
				"Divine"
			],
			weakspots:           [
				"Face (Unbounded)"
			],
			bonds:               [
				"Head",
				"Booster",
				"Arm Blades"
			],
			itemPrefix:          "Ifrit",
			drops:               []
		},
		{
			name:                "Garm",
			size:                "L",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Gauntlet",
				"Hind Legs"
			],
			itemPrefix:          "Wolf",
			drops:               []
		},
		{
			name:                "Blade Arc Soldier",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Left Arm",
				"Head",
				"Back Armor"
			],
			itemPrefix:          "Golem",
			drops:               []
		},
		{
			name:                "Buster Arc Soldier",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Left Arm",
				"Head",
				"Back Armor"
			],
			itemPrefix:          "Golem",
			drops:               []
		},
		{
			name:                "Wild Blade Arc Soldier",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Left Arm",
				"Head",
				"Back Armor"
			],
			itemPrefix:          "Golem",
			drops:               []
		},
		{
			name:                "Wild Buster Arc Soldier",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Left Arm",
				"Head",
				"Back Armor"
			],
			itemPrefix:          "Golem",
			drops:               []
		},
		{
			name:                "White Iron Long Blade Soldier",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Left Arm",
				"Head",
				"Back Armor"
			],
			itemPrefix:          "Pale Fox",
			drops:               []
		},
		{
			name:                "White Iron Buster Soldier",
			size:                "M",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Left Arm",
				"Head",
				"Back Armor"
			],
			itemPrefix:          "Pale Fox",
			drops:               []
		},
		{
			name:                "Quadriga",
			size:                "L",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze",
				"Divine"
			],
			attributeResistance: [
				"Blaze",
				"Spark"
			],
			weakspots:           [
				"Front Armor"
			],
			bonds:               [
				"Exhaust (Headpieces)",
				"Front Armor",
				"Missile Pod"
			],
			itemPrefix:          "King",
			drops:               []
		},
		{
			name:                "Fallen Quadriga (Freeze)",
			size:                "L",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze"
			],
			weakspots:           [
				"Front Armor"
			],
			bonds:               [
				"Front Armor",
				"Missile Pod",
				"Back Leg"
			],
			itemPrefix:          "Pluto, King",
			drops:               []
		},
		{
			name:                "Tezcatlipoca",
			size:                "L",
			attribute:           [],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Front Armor"
			],
			bonds:               [
				"Helm",
				"Front Armor",
				"Missile Pod"
			],
			itemPrefix:          "Anathema",
			drops:               []
		},
		{
			name:                "Aether",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Skirt"
			],
			bonds:               [
				"Head",
				"Skirt",
				"Abdomen"
			],
			itemPrefix:          "Diablo",
			drops:               []
		},
		{
			name:                "Nyx Alpha",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [],
			attributeResistance: [],
			weakspots:           [
				"All (certain bullets)"
			],
			bonds:               [
				"Legs",
				"Skirt",
				"Sphere"
			],
			itemPrefix:          "Blessed",
			drops:               []
		},
		{
			name:                "Borg Camlann",
			size:                "L",
			attribute:           [],
			attributeWeakness:   [
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Blaze",
				"Divine"
			],
			weakspots:           [
				"Shield (Crush)",
				"Needle/Stinger (Crush)"
			],
			bonds:               [
				"Shield",
				"Tail",
				"Front Legs",
				"Needle"
			],
			itemPrefix:          "Knight",
			drops:               []
		},
		{
			name:                "Fallen Borg Camlann (Blaze)",
			size:                "L",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Shield",
				"Tail"
			],
			bonds:               [
				"Shield",
				"Tail",
				"Needle/Stinger)"
			],
			itemPrefix:          "Blaze Knight",
			drops:               []
		},
		{
			name:                "Fallen Borg Camlann (Spark)",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Shield"
			],
			bonds:               [
				"Shield",
				"Tail",
				"Needle/Stinger"
			],
			itemPrefix:          "Spark Knight",
			drops:               []
		},
		{
			name:                "Susano'o",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Shield"
			],
			bonds:               [
				"Mouth",
				"God Arc (Pincers)",
				"Blade (Stinger)"
			],
			itemPrefix:          "Prince",
			drops:               []
		},
		{
			name:                "Hannibal",
			size:                "L",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Blaze"
			],
			weakspots:           [
				"Head",
				"Unbound Wrist"
			],
			bonds:               [
				"Head",
				"Scale (Back)",
				"Wrist (Shield)"
			],
			itemPrefix:          "Serpent",
			drops:               []
		},
		{
			name:                "Corrosive Hannibal",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [
				"Blaze"
			],
			weakspots:           [
				"Head",
				"Unbound Wrist"
			],
			bonds:               [
				"Head",
				"Scale (Back)",
				"Wrist (Shield)"
			],
			itemPrefix:          "Phantom",
			drops:               []
		},
		{
			name:                "Blitz Hannibal",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [
				"Blaze"
			],
			weakspots:           [
				"Head",
				"Unbound Wrist"
			],
			bonds:               [
				"Head",
				"Scale (Back)",
				"Wrist (Shield)"
			],
			itemPrefix:          "Wyvern",
			drops:               []
		},
		{
			name:                "Spartacus",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Freeze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Leg",
				"Arms"
			],
			itemPrefix:          "Warrior",
			drops:               []
		},
		{
			name:                "Caligula",
			size:                "L",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze",
				"Spark"
			],
			attributeResistance: [
				"Freeze",
				"Divine"
			],
			weakspots:           [
				"Head (Unbound)",
				"Booster (Pierce)"
			],
			bonds:               [
				"Head",
				"Booster (Back)",
				"Arms"
			],
			itemPrefix:          "Bahamut",
			drops:               []
		},
		{
			name:                "Caligula Xeno",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze"
			],
			attributeResistance: [
				"Spark",
				"Divine"
			],
			weakspots:           [],
			bonds:               [
				"Spear Horn",
				"Booster",
				"Arms"
			],
			itemPrefix:          "Tarasque",
			drops:               []
		},
		{
			name:                "Marduk",
			size:                "L",
			attribute:           [
				"Blaze"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Head (Unbound)",
				"Booster (Pierce)"
			],
			bonds:               [
				"Head",
				"Gauntlet",
				"Hind Legs"
			],
			itemPrefix:          "Mars",
			drops:               []
		},
		{
			name:                "Demiurge",
			size:                "L",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Blaze",
				"Divine"
			],
			attributeResistance: [
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Head",
				"Front Legs (stretched)"
			],
			bonds:               [
				"Front Legs"
			],
			itemPrefix:          "Creator",
			drops:               []
		},
		{
			name:                "Ouroboros",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Horn",
				"Eyes",
				"Legs"
			],
			bonds:               [
				"Horn",
				"Eyes",
				"Legs"
			],
			itemPrefix:          "Chaotic, Abyssal",
			drops:               []
		},
		{
			name:                "Fallen Ouroboros",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Divine"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Legs (Enraged)"
			],
			bonds:               [
				"Horn",
				"Eyes",
				"Spine"
			],
			itemPrefix:          "Lucifer, Abyssal",
			drops:               []
		},
		{
			name:                "Amaterasu",
			size:                "L",
			attribute:           [
				"Blaze",
				"Divine"
			],
			attributeWeakness:   [
				"Spark"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Divine"
			],
			weakspots:           [
				"Statue(Face)"
			],
			bonds:               [
				"Horn",
				"Goddess",
				"Tentacle"
			],
			itemPrefix:          "Regina's",
			drops:               []
		},
		{
			name:                "Tsukuyomi",
			size:                "L",
			attribute:           [],
			attributeWeakness:   [
				"Spark"
			],
			attributeResistance: [],
			weakspots:           [
				"Moon Halo",
				"Hair"
			],
			bonds:               [
				"Moon Halo",
				"Hair",
				"Arm Armor"
			],
			itemPrefix:          "Elder",
			drops:               []
		},
		{
			name:                "Venus",
			size:                "L",
			attribute:           [
				"Spark"
			],
			attributeWeakness:   [
				"Blaze",
				"Divine"
			],
			attributeResistance: [
				"Spark"
			],
			weakspots:           [
				"Goddess"
			],
			bonds:               [
				"Back Jelly (on top)",
				"Right Jelly",
				"Left Jelly",
				"Rear Jell"
			],
			itemPrefix:          "Grace",
			drops:               []
		},
		{
			name:                "Kyuubi",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Unbounded Head (Crush)"
			],
			bonds:               [
				"Head",
				"Chest",
				"Central Tail"
			],
			itemPrefix:          "Vulpine, Kitsune",
			drops:               []
		},
		{
			name:                "Magatsu Kyuubi",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Unbounded Head (Crush)"
			],
			bonds:               [
				"Head",
				"Chest",
				"Central Tail"
			],
			itemPrefix:          "Sky Fox",
			drops:               []
		},
		{
			name:                "Mukuro Kyuubi",
			size:                "L",
			attribute:           [
				"Freeze",
				"Divine"
			],
			attributeWeakness:   [
				"Spark"
			],
			attributeResistance: [
				"Blaze",
				"Freeze",
				"Spark"
			],
			weakspots:           [
				"Unbound Chest"
			],
			bonds:               [
				"Short Blades",
				"Chest Armor",
				"Central Tail"
			],
			itemPrefix:          "Reynard",
			drops:               []
		},
		{
			name:                "Chrome Gawain",
			size:                "L",
			attribute:           [
				"Freeze"
			],
			attributeWeakness:   [
				"Spark"
			],
			attributeResistance: [
				"Freeze"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Pair Arms",
				"Rear Legs"
			],
			itemPrefix:          "Hydra",
			drops:               []
		},
		{
			name:                "Magna Gawain",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Spark",
				"Divine"
			],
			weakspots:           [],
			bonds:               [
				"Head",
				"Shield",
				"Pair Arms",
				"Rear Legs"
			],
			itemPrefix:          "Pazuzu",
			drops:               []
		},
		{
			name:                "Orochi",
			size:                "L",
			attribute:           [
				"Blaze",
				"Divine"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Divine"
			],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Arm-Heads",
				"Torso"
			],
			itemPrefix:          "Orochi",
			drops:               []
		},
		{
			name:                "Crimson Orochi",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Freeze"
			],
			attributeResistance: [
				"Blaze",
				"Divine"
			],
			weakspots:           [],
			bonds:               [
				"Head",
				"Arm-Heads",
				"Back Legs"
			],
			itemPrefix:          "Orochi",
			drops:               []
		},
		{
			name:                "World Opener",
			size:                "L",
			attribute:           [],
			attributeWeakness:   [],
			attributeResistance: [],
			weakspots:           [
				"Blue Center Core (regular green damage)"
			],
			bonds:               [
				"Shoulder armor"
			],
			itemPrefix:          "",
			drops:               []
		},
		{
			name:                "World Closer",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [],
			bonds:               [
				"Head",
				"Fornt Legs"
			],
			itemPrefix:          "",
			drops:               []
		},
		{
			name:                "Einherjar",
			size:                "L",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark",
				"Divine"
			],
			attributeResistance: [],
			weakspots:           [
				"Head"
			],
			bonds:               [
				"Head",
				"Six Swords",
				"Core (chest)"
			],
			itemPrefix:          "Nihilus",
			drops:               []
		},
		{
			name:                "Last Vestige",
			size:                "L",
			attribute:           [
				"Divine"
			],
			attributeWeakness:   [
				"Blaze",
				"Freeze",
				"Spark"
			],
			attributeResistance: [
				"Divine"
			],
			weakspots:           [],
			bonds:               [
				"Head",
				"Fornt Legs"
			],
			itemPrefix:          "Morgana",
			drops:               []
		},
		{
			name:                "God Arc Soldier Zero",
			size:                "L",
			attribute:           [],
			attributeWeakness:   [
				"Blaze",
				"Freeze"
			],
			attributeResistance: [
				"Spark",
				"Divine"
			],
			weakspots:           [
				"Unbounded Chest(Crush)",
				"Right Front Leg (Pierce Gun)"
			],
			bonds:               [
				"Head",
				"Chest",
				"Right Front Leg"
			],
			itemPrefix:          "Idol",
			drops:               []
		}
	],
	missions: [
		{
			type:       'Standard',
			difficulty: 1,
			name:       'Basic Training 1',
			field:      'Training Grounds',
			other:      [
				'Time Limit: 30:00'
			],
			aragamis:   [
				{aragamis: 'Move Target', amount: 3}
			],
			rewards:    [
				{reward: 'Restore Pill', condition: 'Automatic', probability: 100, max: 1},
				{reward: 'Restore Pill', condition: 'Automatic', probability: 25, max: 1}
			]
		},
		{
			type:       'Standard',
			difficulty: 1,
			name:       'Basic Training 2',
			field:      'Training Grounds',
			other:      [
				'Time Limit: 30:00'
			],
			aragamis:   [
				{aragamis: 'Move Target (Ogretail)', amount: 3}
			],
			rewards:    [
				{reward: 'Restore Pill', condition: 'Automatic', probability: 100, max: 1},
				{reward: 'Restore Pill', condition: 'Automatic', probability: 25, max: 1}
			]
		},
		{
			type:       'Standard|Hard Mission|Extras|Special|GE2RB Mission|Special Mission',
			difficulty: 1,
			name:       '',
			field:      'Training Grounds',
			other:      [
				'Time Limit: 30:00'
			],
			aragamis:   [
				{aragamis: 'Move Target (Ogretail)', amount: 3}
			],
			rewards:    [
				{reward: 'Restore Pill', condition: 'Automatic', probability: 100, max: 1},
				{reward: 'Restore Pill', condition: 'Automatic', probability: 25, max: 1}
			]
		},
	],
	bloodArts: [],
	bloodBullets: [],
	personalAbilities: [],
	characterEpisodes: [],
};