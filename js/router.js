(function(App) {

	'use strict';

	App.Router = (function() {
		var defaultRoute = '#list',
			currentHash = '',
			routes = {
				list: 'ListController',
				add: 'AddController'
			};

		function startRouting() {
			window.location.hash = window.location.hash || defaultRoute;
			window.addEventListener('hashchange', onHashChange, false);
			//update on load
			onHashChange();
		}

		function onHashChange() {
			var route = window.location.hash.replace('#', '');

			if (window.location.hash != currentHash) {
				if (routes[route]) {
					loadController(routes[route]);
				}

				currentHash = window.location.hash;
			}
		}

		function loadController(controller) {
			App[controller].start();
		}

		return {
			startRouting: startRouting
		};
	}());
}(window.MVC));