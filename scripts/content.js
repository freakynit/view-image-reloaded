//console.log("COOKIES_1", document.cookie);

var s = document.createElement("script");
s.type = "text/javascript";
//s.src = "http://localhost:3333/dynload.js";
s.src = "https://rawgit.com/freakynit/view-image-reloaded/master/dynload.js";
s.id = "vir-dynloaded";
s.async = false;
s.defer = false;
document.getElementsByTagName('head')[0].appendChild(s);
