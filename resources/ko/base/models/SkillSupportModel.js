"use strict";
function SkillSupportModel(data) {
	var self = this;

	self.type = "support";
	self.panelClass = 'panel-skill-support';
	self.name = data.name;
	self.lv = ko.observable(data.lv || 0);
	self.minLv = data.minLv;
	self.maxLv = data.maxLv;
	self.description = data.description;
}