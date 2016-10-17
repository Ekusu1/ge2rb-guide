"use strict";
function SkillModel(data) {
	var self = this;

	self.sort = data.sort;
	self.name = data.name;
	self.type = data.type;
	self.minLv = -10;
	self.maxLv = 10;
	self.lvRequirement = 0;
	self.changes = [];
	self.skills = [];
	self.special = false;
	self.description = '';

	switch (self.type) {
		case 'effect':
			self.minLv = data.minLv;
			self.maxLv = data.maxLv;
			self.lvRequirement = data.lvRequirement;
			self.changes = data.changes;
			self.description = data.description;
			break;
		case 'support':
			self.minLv = data.minLv;
			self.maxLv = data.maxLv;
			self.description = data.description;
			break;
		case 'compound':
			self.special = data.special;
			self.skills = data.skills;
			break;
	}
}