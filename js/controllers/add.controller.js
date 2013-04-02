(function(App) {

	'use strict';

	App.AddController = (function() {
		function start() {
			console.log('AddController.start');
			App.AddView.render(addUser);
		}

		function addUser(userName) {
			console.log('AddController.addUser');
			var users = JSON.parse(localStorage.users || '[]');

			users.push(new User(userName));
			window.localStorage.users = JSON.stringify(users);
			window.location.hash = '#list';
		}

		return {
			start: start,
			addUser: addUser
		};
	}());
}(window.MVC));