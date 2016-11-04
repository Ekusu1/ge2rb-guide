function RootModel() {
	var self = this;


	self.data = {
		aragamis: [],
		skills:{
			effect: [],
			support: [],
			compound: []
		}
	};
	MAIN_DATA.aragamis.forEach(aragami=>self.data.aragamis.push(new AragamiModel(aragami)));
	MAIN_DATA.skills.effect.forEach(skill=>self.data.skills.effect.push(new SkillEffectModel(skill)));
	MAIN_DATA.skills.support.forEach(skill=>self.data.skills.support.push(new SkillSupportModel(skill)));
	MAIN_DATA.skills.compound.forEach(skill=>self.data.skills.compound.push(new SkillCompoundModel(skill)));

	console.log(self.data);

	self.aragamiSearchInput = ko.observable('');
	self.aragamiSearchTags = ko.observableArray([]);
	self.addAragamiSearchTag = function () {
		var toAdd = self.aragamiSearchInput();
		if (toAdd !== '' && self.aragamiSearchTags.indexOf(toAdd) < 0) {
			self.aragamiSearchInput('');
			self.aragamiSearchTags.push(toAdd);
		}
		return false;
	};
	self.removeAragamiSearchTag = function (toRemove) {
		self.aragamiSearchTags.remove(toRemove);
	};
	self.aragamisFilter = ko.pureComputed(()=>{
		"use strict";
		var filter = self.aragamiSearchInput().toLowerCase();
		var filterTags = self.aragamiSearchTags().map(v=>v.toLowerCase());

		if (filter === '' && filterTags.length === 0) {
			return self.data.aragamis;
		}

		var list = self.data.aragamis.filter((aragami)=>{
			var doLog = aragami.name === 'Move Target (Night Hollow)' ||
				aragami.itemPrefix === 'A/F-Ticket';
			var searchIn = [
				aragami.name.toLowerCase(),
				aragami.itemPrefix.toLowerCase()
			];

			var endResult = searchIn.some((curValue)=>{
				var result = false;
				if (filter !== '') {
					result = curValue.indexOf(filter) !== -1;
				}
				if (!result) {
					result = filterTags.some((tagValue)=>{
						return curValue.indexOf(tagValue) !== -1;
					})
				}
				return result;
			});
			return endResult;
		});

		return list.length > 0 ? list : self.data.aragamis;
	})

	self.skillsFilter = ko.pureComputed(()=>{
		var list = [];

		self.data.skills.effect.forEach((v)=>list.push(v));
		self.data.skills.support.forEach((v)=>list.push(v));
		self.data.skills.compound.forEach((v)=>list.push(v));

		return list;
	})
}