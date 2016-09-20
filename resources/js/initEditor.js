var rootView = null;
rootView = new EditorViewModel(data);
ko.applyBindings(rootView);
helpers.showLoader(false);