window.ListView = (function() {
	function render(parameters) {
		var appDiv = document.getElementById('app'),
			users = parameters.users,
			len = users.length,
			html = '<ul>',
			i = 0;
		if (len > 0) {
			for (i = 0; i < len; i++) {
				html += '<li>' + users[i].name + '</li>';
			}
		} else {
			html += '<li> No users added... yet :)</li>';
		}
		html += '</ul>';
		appDiv.innerHTML = html;
	}

	return {
		render: render
	};
}());