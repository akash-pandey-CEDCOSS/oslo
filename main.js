$("document").ready(function () {
var interval_;
    var inWrap = $(".inner-wrapper");
    // inWrap.on("mouseenter", stopslide).on("mouseleave", startslide)

        function inter(){
        interval_ = setInterval(function () {
        // $(".prev").on("click", function () {
        inWrap.animate({ left: "0%" }, 1000, function () {
            inWrap.css("left", "-100%");

            $(".slide").first().before($(".slide").last());
        });
        // });
    }, 3000);
        }
        inter();

    $(".prev").on("click", function () {
        clearInterval(interval_);
        inWrap.animate({ left: "0%" }, 500, function () {
            inWrap.css("left", "-100%");
            inter();

            $(".slide").first().before($(".slide").last());
        });
    });

    
    // var interval_ = setInterval(function () {
        $(".next").on("click", function () {
            clearInterval(interval_);

        inWrap.animate({ left: "-200%" }, 500, function () {
            inWrap.css("left", "-100%");
            inter();

            $(".slide").last().after($(".slide").first());
        });
        // });
    });
   
        
       


    });


