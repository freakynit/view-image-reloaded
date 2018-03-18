function loadPlugin(){
    setInterval(function(){
        if(!window.gaLoaded) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://www.googletagmanager.com/gtag/js?id=UA-114441648-1";
            s.id = "vir-ga";
            s.async = false;
            s.defer = false;
            document.getElementsByTagName('head')[0].appendChild(s);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-114441648-1');

            window.gaLoaded = true;
        }

        if(typeof jQuery != 'undefined') {
            var $table = null;
            $table = $("._FKw.irc_but_r:eq(1)");

            if($table.length < 1) {
                $table = $(".iAcjwd.irc_but_r:eq(1)")
            }

            if($table.length > 0) {
                
                var $viewImageButton = $table.find(".view-image-reloaded");
                if($viewImageButton.length < 1) {
                    
                    $viewImage = $('<td><a target="_blank" class="irc_vpl i3599 irc_lth view-image-reloaded" href="#"><span class="_WKw">View Image</span></a></td>');

                    $viewImage.on('click', function(){
                        var sourceImageUrl = $(".irc_mi:eq(1)").attr("src");
                        window.open(sourceImageUrl, '_blank');
                    });

                    $table.find("tr:eq(0)").prepend($viewImage)
                }
            } else {
                console.log("no image table found");
            }
        }
    }, 1000);
}

function loadJquery(){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    s.id = "vir-jquery";
    s.async = false;
    s.defer = false;
    document.getElementsByTagName('head')[0].appendChild(s);
}

if(typeof jQuery == 'undefined') {
    loadJquery();
}

loadPlugin();
