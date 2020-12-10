$("document").ready(function () {
    var interval_;
    counter = 1;
    var inWrap = $(".inner-wrapper");
    function inter() {
        interval_ = setInterval(function () {
            counter++;
            if (counter == 4) {
                counter = 1;
            }
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


