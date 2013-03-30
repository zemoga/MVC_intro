window.EmptyView = (function() {
	function render(wipeOutUsersAction) {
		var wipe = confirm('Are you sure? (Undo is still under construction!)');

		if (wipe) {
			wipeOutUsersAction();
		}

		setTimeout(function(){
			window.location.hash = '#list';
		},0);
	}

	return {
		render: render
	};
}());