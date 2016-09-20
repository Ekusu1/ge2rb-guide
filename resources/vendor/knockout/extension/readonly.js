ko.bindingHandlers.readonly = {
	update: function (element, valueAccessor) {
		if (valueAccessor()) {
			$(element).attr("readonly", "readonly");
			$(element).addClass("disabled");
		} else {
			$(element).removeAttr("readonly");
			$(element).removeClass("disabled");
		}
	}
};