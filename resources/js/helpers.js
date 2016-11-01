var helpers = new function () {
	var self = this;

	self.options = {
		craftTypes: [
			'Melee Weapon',
			'Gun',
			'Shield',
			'Control Unit',
			'Upgrade Parts',
			'Link Support',
			'Top',
			'Bottom'
		],
		elements: [
			'Blaze',
			'Freeze',
			'Spark',
			'Divine'
		],
		atkTypes: [
			'Slash',
			'Crush',
			'Pierce',
		]
	};

	/** @param {boolean} show */
	self.showLoader = (show) => $('#loading')['fade'+show?'In':'Out'](50);

	/**
	 * @param {number} duration in ms
	 * @param {function} callback
	 */
	self.load = function (duration = 1000, callback = ()=>{}) {
		self.showLoader(true);
		setTimeout(()=>{callback();self.showLoader(false);}, duration)
	};

	/**
	 * @param {string} dataName
	 * @returns {number}
	 */
	self.getNewId = (dataName) => {
		var ids = window.rootView.data[dataName]().filter((v)=>v.id());
		return Math.max(0, ...ids) + 1;
	};

	/**
	 * @param {string} dataName
	 * @param {string} searchKey
	 * @param {*} searchValue
	 * @returns {Array}
	 */
	self.findByKeyValue = function (dataName, searchKey, searchValue) {
		var returnValue = [];
		var data        = window.rootView.data[dataName]();

		data.forEach((model,index)=>{
			if (model[searchKey]() === searchValue) {
				returnValue.push({index, model});
			}
		});

		return returnValue;
	};

	/**
	 * @param {string} dataName
	 * @param {number} id
	 * @returns {Object}
	 */
	self.findById = function (dataName, id) {
		return self.findByKeyValue(dataName, 'id', parseInt(id))[0];
	};

	/**
	 *
	 * @param {string} dataName
	 * @param {string} name
	 * @returns {Array}
	 */
	self.findByName = function (dataName, name) {
		return self.findByKeyValue(dataName, 'name', name);
	};

	self.data = {
		/**
		 * @param model
		 */
		create: function (model) {
			window.rootView.data[model.dataName].push(model);
		},
		/**
		 * @param model
		 */
		edit:   function (model) {
			var index = self.findById(model.dataName, model.id());
			window.rootView.data[model.dataName].replace(index, model);
		},
		/**
		 * @param model
		 */
		remove: function (model) {
			window.rootView.data[model.dataName].remove(model);
		}
	};

	self.export = {
		/**
		 * @param {string} filename
		 * @param {string} text
		 */
		createFile: function (filename, text) {
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);

			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
	};

	return self;
};