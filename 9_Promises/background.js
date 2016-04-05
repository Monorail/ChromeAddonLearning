"use strict";
var hsurl = "https://api.twitch.tv/kraken/channels/amazhs"
chrome.browserAction.onClicked.addListener(function(tab) {

var payload = {
  "topic" : "js",
  "q" : "Promise"
};

var callback = {
  success : function(data){
    console.log(1, "success", JSON.parse(data));
  },
  error : function(data){
  	
  }
};

$http(hsurl)
  .get(payload)
  .then(callback.success, callback.error);
$http(hsurl + "AGGGGGGGGGGGGGGGGGGGG")
  .get(payload)
  .then(callback.success, callback.error);
function $http(url){
  var core = {
    ajax : function(method, url, args){
      var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        var uri = url;
        if(args && (method === "POST" || method === "PUT")){
          url += "?";
          var argcount = 0;
          for(var key in args){
            if(args.hasOwnProperty(key)){
              if(argcount++){
                uri += "&";
              }
              uri += encodeURIComponent(key) + "=" + endcodeURLComponent(args[key]);
            }
          }
        }
        client.open(method, uri);
        client.send();

        client.onload = function(){
          if(this.status >= 200 && this.status < 300){
            resolve(this.response);
          }else{
            reject(this.statusText);
          }
        };
        client.onerror = function(){
          reject(this.statusText);
        };
      });
      return promise;
    }
  };

  return {
    "get" : function(args){
      return core.ajax("GET", url, args);
    },
    "post" : function(args){
      return core.ajax("POST", url, args);
    },
    "put" : function(args){
      return core.ajax("PUT", url, args);
    },
    "delete" : function(args){
      return core.ajax("DELETE", url, args);
    }
  };
};
    
});//chrome  hsurl










































