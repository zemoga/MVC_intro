window.EmptyView = (function() {
	function render(wipeOutUsersAction) {
		var wipe = confirm('Are you sure? (Undo is still under construction!)');

		if (wipe) {
			wipeOutUsersAction();
		}

		window.location.hash = '#list';
	}

	return {
		render: render
	};
}());