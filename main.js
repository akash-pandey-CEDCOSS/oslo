$("document").ready(function () {
    var interval_;
    counter = 0;
    var inWrap = $(".inner-wrapper");
    function inter() {
        interval_ = setInterval(function () {
            counter++;
            if (counter >2) {
                counter = 0;
            }
            $(".page-item").removeClass("active");
            
            $(".page-item").eq(counter).addClass("active");
            console.log(counter);

            inWrap.animate({ left: "0%" }, 1000, function () {
                inWrap.css("left", "-100%");

                $(".slide").first().before($(".slide").last());
            });
        }, 3000);
    } inter();

    $(".prev").on("click", function () {
        clearInterval(interval_);
        counter++;
        inWrap.animate({ left: "0%" }, 200, function () {
            inWrap.css("left", "-100%");
            inter();
            $(".slide").first().before($(".slide").last());
        });
    });

    $(".next").on("click", function () {
        clearInterval(interval_);
        counter--;
        inWrap.animate({ left: "-200%" }, 200, function () {
            inWrap.css("left", "-100%");
            inter();
            $(".slide").last().after($(".slide").first());
        });
    });
});


