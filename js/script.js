/*==============Start Demonstration============*/

$('.start_demonstration_content button').on("click", function () {
    setTimeout(function () {
        $('.animation_block').addClass("animated_start");
        $('.start_demonstration_block').addClass("button_submit");
    }, 0);
    setTimeout(function () {
        $('.slider_block').addClass("button_submit_slider");
        $(".animation_block.animated_start").removeClass("animated_start")
    }, 5000);
});


/*=========Bootstrap-slider============*/

$('#myCarousel').carousel();
var winWidth = $(window).innerWidth();
$(window).resize(function () {

    if ($(window).innerWidth() < winWidth) {
        $('.carousel-inner>.item>img').css({
            'min-width': winWidth, 'width': winWidth
        });
    }
    else {
        winWidth = $(window).innerWidth();
        $('.carousel-inner>.item>img').css({
            'min-width': '', 'width': ''
        });
    }
});

$(document).ready(function () {
    $('.carousel-inner').carousel({
        pause: true,
        interval: false
    });
    $(".carousel").swipe({
        swipe: function (event, direction) {
            if (direction == 'left') {
                $(this).carousel('next');
            }
            if (direction == 'right') {
                $(this).carousel('prev');
            }
        },
        allowPageScroll: "vertical"
    });
});

/*=================wow============*/
new WOW().init();
