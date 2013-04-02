(function(App) {

	'use strict';

	App.ListController = (function() {
		function start() {
			console.log('ListController.start');
			var users = JSON.parse(window.localStorage.users || '[]');

			App.ListView.render({
				users: users
			});
		}

		return {
			start: start
		};
	}());
}(window.MVC));