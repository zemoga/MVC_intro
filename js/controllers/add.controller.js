window.AddController = (function(AddView) {
	function start() {
		console.log('AddController.start');
		AddView.render(addUser);
	}

	function addUser(userName) {
		console.log('AddController.addUser');
		var users = JSON.parse(localStorage.users || '[]');

		users.push(new User(userName));
		localStorage.users = JSON.stringify(users);
		window.location.hash = '#list';
	}

	return {
		start: start
	};
}(window.AddView));