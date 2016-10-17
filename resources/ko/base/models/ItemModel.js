"use strict";
function ItemModel(data) {
	var self = this;

	self.name = data.name;
	self.type = data.type;
	self.price = {
		buy: data.priceBuy,
		sell: data.priceSell
	};

}