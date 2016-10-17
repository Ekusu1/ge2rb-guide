"use strict";
function SkillModel(data) {
	var self = this;

	self.sort = ko.observable(data.sort || 0);
	self.name = ko.observable(data.name);
	self.type = ko.observable(data.type);
	self.minLv = ko.observable(-10);
	self.maxLv = ko.observable(10);
	self.lvRequirement = ko.observable(0);
	self.changes = ko.observableArray([]);
	self.skills = ko.observableArray([]);
	self.special = ko.observable(false);
	self.description = ko.observable('');

	switch (self.type) {
		case 'effect':
			self.minLv(data.minLv);
			self.maxLv(data.maxLv);
			self.lvRequirement(data.lvRequirement);
			self.changes(data.changes);
			self.description(data.description);
			break;
		case 'support':
			self.minLv(data.minLv);
			self.maxLv(data.maxLv);
			self.description(data.description);
			break;
		case 'compound':
			self.special(data.special);
			self.skills(data.skills);
			break;
	}

	self.export(()=>{
		var exportData = {
			sort: self.sort(),
			name: self.name(),
			type: self.type()
		};

		switch (self.type) {
			case 'effect':
				exportData.minLv = self.minLv();
				exportData.maxLv = self.maxLv();
				exportData.lvRequirement = self.lvRequirement();
				exportData.changes = self.changes();
				exportData.description = self.description();
				break;
			case 'support':
				exportData.minLv = self.minLv();
				exportData.maxLv = self.maxLv();
				exportData.description = self.description();
				break;
			case 'compound':
				exportData.skills = self.skills();
				exportData.special = self.special();
				break;
		}

		return exportData;
	});
}