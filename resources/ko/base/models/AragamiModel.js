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
	self.data = data;

	self.name = ko.observable('');
	self.wikiLink = ko.pureComputed(()=>WIKI_LINK+self.name());
	self.imgPath = ko.pureComputed(()=>"resources/images/aragami/"+self.name()+".png");
	self.size = ko.observable('');
	self.attribute = ko.observableArray([]);
	self.attributeWeakness = ko.observableArray([]);
	self.attributeResistance = ko.observableArray([]);
	self.weakspots = ko.observableArray([]);
	self.bonds = ko.observableArray([]);
	self.itemPrefix = ko.observableArray("");
	self.drops = ko.observableArray([]);

	$.each(self.data, (k,v)=>self[k](v));

	self.attributeTypes = ['attribute','attributeWeakness','attributeResistance'];
	self.attributeTypesMap = {
		'attribute': 'Attribute',
		'attributeWeakness': 'Weakness',
		'attributeResistance': 'Resistance'
	};
	self.attributeIcons = ko.computed(()=>{
		var icons = {};
		self.attributeTypes.forEach((va)=>{
			icons[va] = ["Blaze","Freeze","Spark","Divine"];
			icons[va] = icons[va].map((v)=>{
				var newValue = "fa";
				switch (v){
					case "Blaze": newValue +=  ' fa-fire'; break;
					case "Freeze": newValue += ' fa-asterisk'; break;
					case "Spark": newValue +=  ' fa-flash'; break;
					case "Divine": newValue += ' fa-sun-o'; break;
				}
				if (self[va]().indexOf(v) > -1) {
					switch (v){
						case "Blaze":  newValue += ' color-blaze'; break;
						case "Freeze":  newValue += ' color-freeze'; break;
						case "Spark":  newValue += ' color-spark'; break;
						case "Divine":  newValue += ' color-divine'; break;
					}
				} else {
					newValue += ' color-no';
				}
				return newValue;
			});
		});
		return icons;
	});
	self.dropsGrouped = ko.computed(()=>{
		var drops = self.drops(),
			dropsGrouped = {};

		drops.forEach((chances)=>{
			var item = chances.item;
			delete chances.item;
			$.each(chances, (difficulty, chance)=>{
				dropsGrouped[difficulty] === undefined && (dropsGrouped[difficulty] = []);
				chance = Math.round(chance * 100);
				chance>0 && (dropsGrouped[difficulty].push({item,chance}));
			});
		});

		var reducedDropsGrouped = {};
		var newDifficulty = '';
		var newItems = null;
		$.each(dropsGrouped, (currentDifficulty, currentItems)=>{
			if (currentItems.length < 1) { return true; }

			var prevItems=JSON.stringify(newItems);
			var currItems=JSON.stringify(currentItems);
			if (newItems !== null && JSON.stringify(newItems) === JSON.stringify(currentItems)) {
				newDifficulty += ', '+currentDifficulty
			} else if (newItems !== null) {
				reducedDropsGrouped[newDifficulty] = newItems;
			} else {
				newDifficulty = currentDifficulty;
				newItems = currentItems;
			}
		});

		data.name == 'Ogretail' && console.log(reducedDropsGrouped);
		return dropsGrouped;
	});
}