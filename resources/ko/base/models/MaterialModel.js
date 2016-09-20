"use strict";


function MaterialModel(name, whereToGet = {
	location: [],
	missionRreward: [],
	reward: [],

}) {
	var self = this;

	self.name = ko.observable('')
	self.whereToGet= ko.observable({})

	self.name(name)
	self.whereToGet(whereToGet)
}