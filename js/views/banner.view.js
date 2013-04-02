(function(App) {

	'use strict';

	App.BannerView = (function() {

		function render(parameters) {
			displayMessage(parameters.msg, parameters.delay);
		}

		function displayMessage(msg, delay) {
			var element = document.getElementById('banner');

			element.innerHTML = '<div class="content">' + msg + '</div>';
			setTimeout(function() {
				element.innerHTML = '';
			}, delay);
		}

		function newUser(userName) {
			displayMessage('A new user called "' + userName + '" has been added!', 3000);
		}

		//construction
		App.Mediator.subscribe('add user', newUser);
		App.Mediator.subscribe('render banner', render);

		return {
			render: render
		};
	}());
}(window.MVC));