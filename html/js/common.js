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


    /*******************************************************/
    //REVIEWS SLIDER
    /*******************************************************/

    $('.reviews__box').addClass('owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            641: {
                items: 2
            }
        }
    });


    //*****************************************************
    // Google Map
    //*****************************************************
    if(typeof google === 'object' && typeof google.maps === 'object' && $('#map').length) {
        var markerPosition = new google.maps.LatLng(55.763319, 37.551117);

        function initialize() {
            var loc, map;

            loc = new google.maps.LatLng(65.020902, 100.094950);

            map = new google.maps.Map(document.getElementById('map'), {
                 zoom: 3,
                 center: loc,
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 scrollwheel: false
            });

            var marker = new google.maps.Marker({
                map: map,
                position: markerPosition,
                visible: true,
                //icon: 'img/icon-map.png'
            });
        }
        initialize();
        google.maps.event.addDomListener(window, 'load', initialize);
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
            var $header = $('.header_fullscreen');
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
