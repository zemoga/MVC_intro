window.BannerController = (function(BannerView) {
	function start() {
		console.log('BannerController.start');
		BannerView.render({
			msg:'Try adding user...',
			delay:2000
		});
	}

	return {
		start: start
	};
}(window.BannerView));