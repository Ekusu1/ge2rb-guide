"use strict";
function RootModel() {
	var self = this;

	self.data = {
		skills: ko.observableArray([])
	}

	self.exportData = () => {
		var exportData = {effects: []};
		exportData.effects = self.data.skills.reduce((p,skill,i,a)=>skill.export(),[]);
		return JSON.stringify(exportData, null, '\t')
		// helpers.export.createFile('data.json', JSON.stringify(exportData, null, '\t'));
	};
}