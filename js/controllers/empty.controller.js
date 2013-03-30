window.EmptyController = (function(EmptyView) {
	function start() {
		console.log('EmptyController.start');
		EmptyView.render(clearUserList);
	}

	function clearUserList() {
		if (localStorage.users) {
			localStorage.removeItem('users');
		}
	}

	return {
		start: start
	};
}(window.EmptyView));