function EditorViewModel(data) {
	var self = this;

	self.dataModel     = {
		effects: EffectModel,
		skills:  SkillModel,
		ninjas:  NinjaModel
	};
	var baseModelNames = Object.keys(self.dataModel);


	self.data = {
		effects: ko.observableArray([]),
		skills:  ko.observableArray([]),
		ninjas:  ko.observableArray([])
	};

	self.isempty = {
		effects: ko.computed(()=>self.data.effects().length === 0),
		skills:  ko.computed(()=>self.data.skills().length === 0),
		ninjas:  ko.computed(()=>self.data.ninjas().length === 0)
	};

	baseModelNames.forEach((n)=>data[n].forEach((d)=>self.data[n].push(new self.dataModel[n](d))));

	self.exportData = () => {
		var exportData = {effects: [], skills: [], ninjas: []};
		baseModelNames.forEach((n)=>self.data[n]().forEach((m)=>exportData[n].push(m.export())));
		helpers.export.createFile('data.json', JSON.stringify(exportData, null, '\t'));
	};
}