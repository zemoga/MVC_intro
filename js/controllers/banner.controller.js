(function(App) {

	'use strict';

	App.BannerController = (function() {
		function start() {
			console.log('BannerController.start');
			App.BannerView.render({
				msg: 'Try adding user...',
				delay: 2000
			});
		}

		return {
			start: start
		};
	}());
}(window.MVC));