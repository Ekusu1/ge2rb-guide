const WIKI_LINK = 'http://godeater.wikia.com/wiki/';
var MAIN_DATA   = {
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
					"item": "Aragami Bone Chip",
					1:      0.25,
					2:      0.264,
					3:      0.277,
					4:      0.3,
					5:      0.3,
					6:      0.3,
					7:      0.3,
					8:      0.3,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0
				},
				{
					"item": "Aragami Claw",
					1:      0.23,
					2:      0.264,
					3:      0.277,
					4:      0.27,
					5:      0.27,
					6:      0.27,
					7:      0.27,
					8:      0.27,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0
				},
				{
					"item": "Ogre Fang",
					1:      0.22,
					2:      0.142,
					3:      0.149,
					4:      0.05,
					5:      0.05,
					6:      0.05,
					7:      0.05,
					8:      0.05,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0.27
				},
				{
					"item": "Ogre Tail",
					1:      0.15,
					2:      0.142,
					3:      0.099,
					4:      0.15,
					5:      0.15,
					6:      0.15,
					7:      0.15,
					8:      0.15,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0
				},
				{
					"item": "Cinnabar",
					1:      0.08,
					2:      0.113,
					3:      0.119,
					4:      0.15,
					5:      0.15,
					6:      0.15,
					7:      0.15,
					8:      0.15,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0.15
				},
				{
					"item": "Ogre Helm",
					1:      0.07,
					2:      0.075,
					3:      0.079,
					4:      0.08,
					5:      0.08,
					6:      0.08,
					7:      0.08,
					8:      0.08,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0.3
				},
				{
					"item": "Aragami Bone",
					1:      0,
					2:      0,
					3:      0,
					4:      0,
					5:      0,
					6:      0,
					7:      0,
					8:      0,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0.15
				},
				{
					"item": "Ogre Sharp Tail",
					1:      0,
					2:      0,
					3:      0,
					4:      0,
					5:      0,
					6:      0,
					7:      0,
					8:      0,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0.08
				},
				{
					"item": "Ogre Sharp Helm",
					1:      0,
					2:      0,
					3:      0,
					4:      0,
					5:      0,
					6:      0,
					7:      0,
					8:      0,
					9:      0,
					10:     0,
					11:     0,
					12:     0,
					13:     0,
					14:     0,
					15:     0,
					Challenge:   0.05
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
			itemPrefix:          "",
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
			name:                "Fierce Kongou",
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
			itemPrefix:          "",
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
			name:                "Golden Vajra",
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
			name:                "Dyaus Pita (Heavenly Father)",
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
			name:                "God Arc Soldier",
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
			name:                "Rampage God Arc Soldier",
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
			name:                "Silver God Arc Soldier",
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
			name:                "Fallen Quadriga",
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
			itemPrefix:          "Pluto",
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
				"Freeze",
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
			itemPrefix:          "Lucifer",
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
			itemPrefix:          "Vulpine",
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
			name:                "God Arc Soldier Version Zero",
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
	]
}