chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('main.html', {
    id: "BAH",
    bounds: {
      width: 500,
      height: 600
    },
    minWidth: 500,
    minHeight: 600
  });
});