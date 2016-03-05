chrome.browserAction.onClicked.addListener(function (tab) {
	background_send_msg = "message_from_background";
	chrome.tabs.query({
		active : true,
		currentWindow : true
	}, function (tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {
			"message" : background_send_msg
		});
	});
	console.log("background.js: Sent \"" + background_send_msg + "\" to content.js")
});

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
	background_rec_msg = "message_from_content"
	if (request.message === background_rec_msg) {
        console.log("background.js: Received message from content.js!")
	}
});
