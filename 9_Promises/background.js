chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Start")
    var promise = $.ajax({
      url: "https://api.twitch.tv/kraken/channels/amazhs"
    });
    promise.done(function(res){console.log("WIN")});
    promise.fail(function(){console.log("FAIL")});
    promise.always(function(){console.log("ALWAYS")});
    
    promise = $.ajax({
      url: "https://api.twitch.tv/kraken/channels/amazhsasdfgbasuhdijfk"
    });
    promise.done(function(res){console.log("WIN")});
    promise.fail(function(){console.log("FAIL")});
    promise.always(function(){console.log("ALWAYS")});
});