(function(App) {

	'use strict';

	App.AddView = (function() {
		function render() {
			var appDiv = document.getElementById('app');

			appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
			bindEvents();
		}

		function bindEvents() {
			document.getElementById('add').addEventListener('click', addUser, false);
			document.getElementById('user-name').addEventListener('keydown', onEnterPressed, false);
		}

		function onEnterPressed(event) {
			if (event.keyCode === 13) {
				addUser();
			}
		}

		function addUser() {
			var usernameField = document.getElementById('user-name');

			App.Mediator.publish('add user', [usernameField.value]);
			usernameField.value = '';
		}

		//construction
		App.Mediator.subscribe('render add', render);

		return {
			render: render
		};
	}());
}(window.MVC));