$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.scrollExp').each(function (i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('.experience li.active').removeClass('active');
                $('.experience li').eq(i).addClass('active');
            }
        });

        $('header').addClass('sticky');

    } else {

        $('.experience li.active').removeClass('active');
        $('.experience li:first').addClass('active');
        $('header').removeClass('sticky');
    }

}).scroll();

