window.AddView = (function() {
	function render(action) {
		var appDiv = document.getElementById('app');

		appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
		bindEvents(action);
	}

	function bindEvents(addUserAction) {
		document.getElementById('add').addEventListener('click',addUser, false);
	}

	function addUser(){
		window.Mediator.publish('add user',[document.getElementById('user-name').value]);
	}

	return {
		render: render
	};
}());