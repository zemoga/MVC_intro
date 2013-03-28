window.AddView = (function() {
	function render(action) {
		var appDiv = document.getElementById('app');

		appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
		bindEvents(action);
	}

	function bindEvents(addUserAction) {
		document.getElementById('add').addEventListener('click', function(){
			addUserAction(document.getElementById('user-name').value);
		}, false);
	}

	return {
		render: render
	};
}());