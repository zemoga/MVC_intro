(function(App) {

	'use strict';

	App.EmptyView = (function() {
		function render() {
			var wipe = confirm('Are you sure? (Undo is still under construction!)');

			if (wipe) {
				App.EmptyController.clearUserList();
			}

			setTimeout(function() {
				window.location.hash = '#list';
			}, 0);
		}

		return {
			render: render
		};
	}());
}(window.MVC));