chrome.browserAction.onClicked.addListener(function(tab) {
    Twitch.init({clientId: 'YOUR_CLIENT_ID_HERE'}, function(error, status) {
        // the sdk is now loaded
      });

});