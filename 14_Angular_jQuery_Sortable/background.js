
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({"url": "chrome-extension://deogaglpinakhgbjebamebihdkgfbiog/options.html"});
});