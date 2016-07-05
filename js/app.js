$(function() {
    $('.go-to').on('click', function(e) {
        e.stopPropagation();
        var $this = $(this);
        var href = $this.attr('href');
        $.smoothScroll({
            scrollTarget: href
        });
        var $nav = $('#nav');
        var $links = $nav.find('a');
        var $target = $nav.find('a[href="' + href + '"]');
        $links.removeClass('active');
        $target.addClass('active');
        return false;
    });
    $('.finger-print').on('click', function(e) {
        e.stopPropagation();
        var $this = $(this);
        $this.fadeOut('slow', function() {
            $('body').removeClass('locked');
            $this.removeAttr('style');
        });
    });
    var $mySlider = $('#my-slider').sliderPro({
        width: 500,
        height: 518,
        autoplay: false,
        slideDistance: 6,
        visibleSize: '100%',
        loop: false,
        buttons: false,
        forceSize: 'fullWidth',
        breakpoints: {
        1600: {
            width: 355,
        	height: 369,
        },
        501: {
            width: 173,
        	height: 294,
        }
    }
    });
    var sliderActions = $mySlider.data('sliderPro');
    $('.prev-btn').on('click', function(e) {
        e.stopPropagation();
        sliderActions.nextSlide();
        return false;
    });
    $('.next-btn').on('click', function(e) {
        e.stopPropagation();
        sliderActions.previousSlide();
        return false;
    });
    $('.play-btn').on('click', function(e) {
        e.stopPropagation();
        var vid = document.getElementById("myVideo");
        if (vid.requestFullscreen) {
            vid.requestFullscreen();
        } else if (vid.mozRequestFullScreen) {
            vid.mozRequestFullScreen();
        } else if (vid.webkitRequestFullscreen) {
            vid.webkitRequestFullscreen();
        }
        vid.play();
        return false;
    });
});