var num = 300;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.animation_1').addClass('animated rotateIn' );
    } else {
        $('.animation_1').removeClass('animated rotateIn');
    }
});

