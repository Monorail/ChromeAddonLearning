"use strict";
var hsurl = "https://api.twitch.tv/kraken/channels/amazhs"
chrome.browserAction.onClicked.addListener(function(tab) {
        console.log("arr");

    var hsurl = "https://api.twitch.tv/kraken/channels/amazhs"
    var payload = {"topic" : "js","q" : "Promise"};
    var i = 0;
    var arr = [];
    var callback = {
      success : function(data){
        console.log(1, "success", JSON.parse(data));
        arr.push("hello");
        // i = i + 1
      },
      error : function(data){
        
      }
    };

    var p1 = $http(hsurl)
      .get(payload)
      .then(callback.success, callback.error);
    var p2 = $http(hsurl + "badbadbad")
      .get(payload)
      .then(callback.success, callback.error);
    Promise.all([p1, p2]).then(function(values){
        console.log("arr");
        console.log("arr begin");
        console.log(arr);
        console.log("arr after");
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
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










































