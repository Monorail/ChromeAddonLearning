chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({},  function( tabs ) {
        for(i = 0; i < tabs.length; i++){
            chrome.tabs.update( tabs[i].id, { url: "http://twitch.tv/" } ); 
        }
    });
});