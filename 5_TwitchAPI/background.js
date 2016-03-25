chrome.browserAction.onClicked.addListener(function(tab) {
    // https://api.twitch.tv/kraken/streams/amazhs
    var channels = ['amazhs', "nl_kripp", "reckful"];
    for(i = 0; i < channels.length; ++i){
        var xmlhttp = new XMLHttpRequest()
        var url = 'https://api.twitch.tv/kraken/channels/'+channels[i];
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText)
            }
        }
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }
});