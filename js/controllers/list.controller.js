window.ListController = (function(ListView) {
	function start() {
		console.log('ListController.start');
		var users = JSON.parse(localStorage.users || '[]');

		ListView.render({
			users: users
		});
	}

	return {
		start: start
	};
}(window.ListView));