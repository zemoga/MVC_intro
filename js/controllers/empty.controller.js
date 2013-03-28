window.EmptyController = (function(EmptyView) {
	function start() {
		EmptyView.render(clearUserList);
	}

	function clearUserList() {
		if (localStorage.users) {
			localStorage.removeItem('users');
		}

		window.location.hash = '#list';
	}

	return {
		start: start
	};
}(window.EmptyView));