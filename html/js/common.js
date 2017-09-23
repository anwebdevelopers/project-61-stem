$(function() {

    'use strict';

    /*******************************************************/
    //FIRST SCREEN SLIDER
    /*******************************************************/
    var $headerBanner = $('.header__slide');
    if ($headerBanner.length > 1) {
        $headerBanner.wrapAll('<div class="header__slider owl-carousel"></div>');
        $('.header__slider').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            items: 1,
            nav: true,
            navText: '',
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 800,
            mouseDrag: false
        });
    }


    //******************************************************************//
    //Chrome Smooth Scroll
    //******************************************************************//
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

    /*******************************************************/
    //Fullscreen Header for IE
    /*******************************************************/

    function fullscreen() {
        if( $('html').hasClass('ie') || $('html').hasClass('gecko') ) {
            var $header = $('.header');
            $header.removeAttr('style');
            var windowHeight = $(window).height(),
                headerHeight = $header.height();
            if ( windowHeight >= headerHeight ) {
                $header.css({
                    'height' : windowHeight + 'px'
                });
            }
        }
    }
    fullscreen();

    $(window).resize(function() {
        fullscreen();
    });

});
