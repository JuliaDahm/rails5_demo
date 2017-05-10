App.room = App.cable.subscriptions.create(
	"ChatRoomChannel", {
		connected: function(data) { },
		disconnected: function(data) { },
		received: function(data) {
			alert(data['message']);
		}
		speak: function(message) {
			this.perform('speak', {message: message});
		}
});