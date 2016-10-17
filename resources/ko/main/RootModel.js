function RootModel() {
	var self = this;


	self.data = {
		aragamis: []
	};
	MAIN_DATA.aragamis.forEach(aragami=>self.data.aragamis.push(new AragamiModel(aragami)));

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
}