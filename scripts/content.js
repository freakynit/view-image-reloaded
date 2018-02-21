$(document).ready(function(){
    setInterval(function(){
        var $table = $("._FKw.irc_but_r:eq(1)") 
        var $viewImageButton = $table.find(".view-image-reloaded");

        if(!window.gaLoaded) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://www.googletagmanager.com/gtag/js?id=UA-114441648-1";
            s.id = "vir-ga";
            s.async = false;
            s.defer = false;
            $("head").append(s);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-114441648-1');

            window.gaLoaded = true;
        }

        if($viewImageButton.length < 1) {
            
            $viewImage = $('<td><a target="_blank" class="irc_vpl i3599 irc_lth view-image-reloaded" href="#"><span class="_WKw">View Image</span></a></td>');

            $viewImage.on('click', function(){
                var sourceImageUrl = $(".irc_mi:eq(1)").attr("src");
                window.open(sourceImageUrl, '_blank');
            });

            $table.find("tr:eq(0)").prepend($viewImage)
        }
    }, 1000);
});
