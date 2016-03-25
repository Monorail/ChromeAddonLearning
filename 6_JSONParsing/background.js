chrome.browserAction.onClicked.addListener(function(tab) {
    var channels = ['amazhs', "nl_kripp", "reckful"];
    for(i = 0; i < channels.length; ++i){
        var xmlhttp = new XMLHttpRequest()
        var url = 'https://api.twitch.tv/kraken/streams/'+channels[i];
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jObj = JSON.parse(this.responseText)
                if(jObj.stream != null){
                    alert(jObj.stream.channel.display_name + " is online")
                } else {
                    alert(channels[i] + " is offline")
                }
            }
        }
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }
});