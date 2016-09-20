function MainViewModel() {
	var self = this;

	self.aragamis = ko.observableArray([]);
	MAIN_DATA.aragamis.forEach((v,i,a)=>{
		self.aragamis.push(new AragamiModel(v))
	});

	self.aragamiSearchInput = ko.observable('');
	self.aragamiSearchTags = ko.observableArray([]);
	self.addAragamiSearchTag = function () {
		var toAdd = self.aragamiSearchInput();
		if (self.aragamiSearchTags.indexOf(toAdd) < 0) {
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
		var filterTags = self.aragamiSearchTags().map((v)=>v.toLowerCase());

		if (filter === '' && filterTags.length === 0) {
			return self.aragamis();
		}

		var list = self.aragamis().filter((v)=>{
			var doLog = v.name() === 'Move Target (Night Hollow)' ||
				v.itemPrefix() === 'A/F-Ticket';
			var searchIn = [
				v.name().toLowerCase(),
				v.itemPrefix().toLowerCase()
			];
			doLog && console.group(v.name());
			doLog && console.log(searchIn);

			var endResult = searchIn.some((curValue)=>{
				var result = false;
				if (filter !== '') {
					result = curValue.indexOf(filter) !== -1;
				}
				doLog && console.log('txt', filter, result);
				if (!result) {
					result = filterTags.some((tagValue)=>{
						doLog && console.log('tag',curValue, curValue.indexOf(tagValue) !== -1);
						return curValue.indexOf(tagValue) !== -1;
					})
				}
				return result;
			});
			doLog && console.groupEnd(v.name());
			return endResult;
		});

		return list.length > 0 ? list : self.aragamis();
	})
}