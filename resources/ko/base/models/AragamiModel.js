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
	self.wikiLink = ko.pureComputed(()=>""+self.name());
	self.imgPath = ko.pureComputed(()=>"resources/images/aragami/"+self.name()+".png");
	self.size = ko.observable('');
	self.attribute = ko.observableArray([]);
	self.attributeWeakness = ko.observableArray([]);
	self.attributeResistance = ko.observableArray([]);
	self.weakspots = ko.observableArray([]);
	self.bonds = ko.observableArray([]);
	self.itemPrefix = ko.observableArray("");
	self.drops = ko.observableArray([]);

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
				var newValue = "fa fa-fw";
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
	self.attributeWeaknessIcons = ko.observableArray([]);
	self.attributeResistanceIcons = ko.observableArray([]);


	$.each(self.data, (k,v)=>self[k](v));
}