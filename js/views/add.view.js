(function(App) {

	'use strict';

	App.AddView = (function() {
		function render() {
			var appDiv = document.getElementById('app');

			appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
			bindEvents();
		}

		function bindEvents() {
			document.getElementById('add').addEventListener('click', function() {
				App.AddController.addUser(document.getElementById('user-name').value);
			}, false);
		}

		return {
			render: render
		};
	}());
}(window.MVC));