(function(App) {

	'use strict';

	App.BannerView = (function() {
		var element;

		function render(parameters) {
			element = document.getElementById('banner');

			displayMessage(parameters.msg, parameters.delay);
			MVC.Mediator.subscribe('add user', newUser);
		}

		function displayMessage(msg, delay) {
			element.innerHTML = '<div class="content">' + msg + '</div>';
			setTimeout(function() {
				element.innerHTML = '';
			}, delay);
		}

		function newUser(userName) {
			displayMessage('A new user called "' + userName + '" has been added!', 3000);
		}

		return {
			render: render
		};
	}());
}(window.MVC));