window.AddController = (function(AddView) {
	function start() {
		AddView.render(addUser);
	}

	function addUser(userName) {
		var users = JSON.parse(localStorage.users || '[]');

		users.push(new User(userName));
		localStorage.users = JSON.stringify(users);
		window.location.hash = '#list';
	}

	return {
		start: start
	};
}(window.AddView));