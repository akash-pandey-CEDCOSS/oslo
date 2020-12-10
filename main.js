$("document").ready(function () {

    var inWrap = $(".inner-wrapper");
    var interval_ = setInterval(function () {
        // $(".prev").on("click", function () {
        inWrap.animate({ left: "0%" }, 3000, function () {
            inWrap.css("left", "-100%");

            $(".slide").first().before($(".slide").last());
        });
        // });
    });

    
    // var interval_ = setInterval(function () {
        $(".next").on("click", function () {
        inWrap.animate({ left: "-200%" }, 3000, function () {
            inWrap.css("left", "-100%");

            $(".slide").last().after($(".slide").first());
        });
        // });
    });


  


   
    // $(".next").on("click", function(){
    //     clearInterval(interval_);
    //     inWrap.animate({ right: "0%" }, 2000, function () {
    //         inWrap.css("right", "-100%");

    //         $(".slide").before().first($(".slide").last());
    //     });
       
    // });
     
        
       


    });


