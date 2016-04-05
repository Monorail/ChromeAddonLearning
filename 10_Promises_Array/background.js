chrome.browserAction.onClicked.addListener(function(tab) {
    // list of streamers (and intended fails) to poll
    var channels = ["amazhs", "nl_kripp","amsssssazhs", "nl_krisssssssssspp", "amazhs", "directory", "jobs", "amazhs"];
    var promise_array = [];
    //add all promises to array
    for(var i = 0; i < channels.length; i++){
        var promise = $.ajax({
          url: "https://api.twitch.tv/kraken/channels/" + channels[i]
        });
        promise_array.push(promise);
        //give promises individual completion conditions
        promise.done(function(){
            console.log("asd");
        });
    }
    //give promise group completion condition
    $.when(promise_array).then(function(){
            console.log("all done");
        });
});