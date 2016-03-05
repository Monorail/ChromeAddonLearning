// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "message_from_background" ) {
        console.log("content.js: Received message from background.js! Responding.")
        chrome.runtime.sendMessage({"message": "message_from_content"});
    }
  }
);