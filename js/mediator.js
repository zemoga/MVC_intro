window.Mediator = (function(context) {
	var messages = {};

	function subscribe(message, action) {
		if (!messages[message]) {
			messages[message] = [];
		}

		if(messages[message].indexOf(action) < 0){
			messages[message].push(action);
		}
	}

	function publish(message, params) {
		var len = (messages[message] || []).length,
			i;

		for (i = 0; i < len; i++) {
			messages[message][i].apply(this, params);
		}
	}

	return {
		publish: publish,
		subscribe: subscribe,
		messages: function() {
			return messages;
		}
	};
}());