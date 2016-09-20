ko.utils.clone = function (obj) {
	var target = new obj.constructor();
	for (var prop in obj) {
		var propVal = obj[prop];
		if (ko.isObservable(propVal)) {
			var val = propVal();
			if ($.type(val) == 'object') {
				target[prop] = ko.utils.clone(val);
				continue;
			}
			target[prop](val);
		}
	}
	return target;
};