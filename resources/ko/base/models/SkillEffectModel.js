"use strict";
function SkillEffectModel(data) {
	var self = this;

	self.type = "effect";
	self.panelClass = 'panel-skill-effect';
	self.name = data.name;
	self.lv = ko.observable(data.lv || 0);
	self.minLv = data.minLv;
	self.maxLv = data.maxLv;
	self.description = data.description;
}