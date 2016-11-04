"use strict";
function SkillCompoundModel(data) {
	var self = this;
	self.type = "compound";
	self.name = data.name;
	self.lv = ko.observable(data.lv || 1);
	self.skillsStatic = data.skills;
	self.panelClass = 'panel-skill-compound-'+self.skillsStatic.length;
	self.special = data.special;


	self.skills = ko.pureComputed(()=>(
		self.special
			? self.skillsStatic
			: self.skillsStatic.map((v)=>({skill: v.skill, lv: v.lv * self.lv()}))
	));
}