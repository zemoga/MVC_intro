(function(App) {

	'use strict';

	App.EmptyController = (function() {
		function start() {
			console.log('EmptyController.start');
			MVC.EmptyView.render();
		}

		function clearUserList() {
			if (localStorage.users) {
				localStorage.removeItem('users');
			}
		}

		return {
			start: start,
			clearUserList: clearUserList
		};
	}());
}(window.MVC));