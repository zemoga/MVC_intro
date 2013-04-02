(function(App) {

	'use strict';

	App.AddController = (function() {
		function start() {
			console.log('AddController.start');
			App.Mediator.publish('render add');
		}

		function addUser(userName) {
			console.log('AddController.addUser');
			var users = JSON.parse(localStorage.users || '[]');

			users.push(new User(userName));
			window.localStorage.users = JSON.stringify(users);
		}

		//construction
		App.Mediator.subscribe('add user', addUser);

		return {
			start: start
		};
	}(App.AddView));
}(window.MVC));