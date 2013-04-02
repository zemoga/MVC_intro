(function(App) {

	'use strict';

	App.ListView = (function() {
		function render(users) {
			var appDiv = document.getElementById('app'),
				len = users.length,
				html = '<ul>',
				i = 0;

			if (len > 0) {
				for (i = 0; i < len; i++) {
					html += '<li>' + users[i].name + '</li>';
				}
			} else {
				html += '<li> No users added... yet :)</li>';
			}

			html += '</ul>';
			appDiv.innerHTML = html;
		}

		//construction
		App.Mediator.subscribe('render list', render);

		return {
			render: render
		};
	}());
}(window.MVC));