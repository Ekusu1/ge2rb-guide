function MainViewModel() {
	var self = this;

	self.aragamis = ko.observableArray([]);
	MAIN_DATA.aragamis.forEach((v,i,a)=>{
		self.aragamis.push(new AragamiModel(v))
	});

	self.aragamiSearchInput = ko.observable('');
	self.aragamisFilter = ko.pureComputed(()=>{
		"use strict";
		var filter = self.aragamiSearchInput().toLowerCase();
		if (filter == '') {
			return self.aragamis();
		}
		var list = self.aragamis().filter((v)=>{
			return v.name().toLowerCase().indexOf(filter) !== -1
				|| v.itemPrefix().toLowerCase().indexOf(filter) !== -1
		});
		console.log(list);
		if (list.length === 0) list = self.aragamis();
		return list;
	})
}