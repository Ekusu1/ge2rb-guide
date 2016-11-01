"use strict";


function AragamiModel(data = {
	name: '',
	size: '',
	attribute: '',
	attributeWeakness: '',
	attributeResistance: '',
	bonds: [],
	itemPrefix,
	drops: []
}) {
	var self = this;

	self.name = data.name;
	self.wikiLink = ko.pureComputed(()=>WIKI_LINK+self.name);
	self.imgPath = ko.pureComputed(()=>{
		return {
			large: "resources/images/aragami/"+self.name+".png",
			small: "resources/images/aragamiSmall/"+self.name+".png"
		}
	});
	self.size = data.size;
	self.attribute = data.attribute;
	self.attributeWeakness = data.attributeWeakness;
	self.attributeResistance = data.attributeResistance;
	self.weakspots = data.weakspots;
	self.bonds = data.bonds;
	self.itemPrefix = data.itemPrefix;
	self.drops = data.drops;

	self.attributeTypes = ['attribute','attributeWeakness','attributeResistance'];
	self.attributeTypesMap = {
		'attribute': 'Attribute',
		'attributeWeakness': 'Weakness',
		'attributeResistance': 'Resistance'
	};
	self.attributeIcons = ko.computed(()=>{
		var icons = {};
		self.attributeTypes.forEach((attributeType)=>{
			icons[attributeType] = ["Blaze","Freeze","Spark","Divine"];
			icons[attributeType] = icons[attributeType].map((attribute)=>{
				var returnVal = {};
				returnVal.type = self.attributeTypesMap[attributeType].toLowerCase();
				returnVal.attribute = attribute.toLowerCase();
				returnVal.color = self[attributeType].indexOf(attribute) > -1 ? returnVal.attribute : 'no';
				return returnVal
			});
		});
		return icons;
	});
	self.dropsGrouped = ko.computed(()=>{
		var drops = self.drops,
			dropsGrouped = [];
		//
		// var drops = drops.reduce((p, drop)=>{
		//
		// 	drop.rates.forEach((rate,diffculty)=>{
		//
		//
		// 	})
		// },[])
		//
		// drops.forEach((drop)=>{
		// 	var item = drop.item;
		// 	delete drop.item;
		// 	$.each(drop, (difficulty, chance)=>{
		// 		dropsGrouped[difficulty] === undefined && (dropsGrouped[difficulty] = []);
		// 		chance = Math.round(chance * 100);
		// 		chance>0 && (dropsGrouped[difficulty].push({item,chance}));
		// 	});
		// });
		//
		// var reducedDropsGrouped = {};
		// var newDifficulty = '';
		// var newItems = null;
		// $.each(dropsGrouped, (currentDifficulty, currentItems)=>{
		// 	if (currentItems.length < 1) { return true; }
		//
		// 	var prevItems=JSON.stringify(newItems);
		// 	var currItems=JSON.stringify(currentItems);
		// 	if (newItems !== null && JSON.stringify(newItems) === JSON.stringify(currentItems)) {
		// 		newDifficulty += ', '+currentDifficulty
		// 	} else if (newItems !== null) {
		// 		reducedDropsGrouped[newDifficulty] = newItems;
		// 	} else {
		// 		newDifficulty = currentDifficulty;
		// 		newItems = currentItems;
		// 	}
		// });

		return dropsGrouped;
	});
}