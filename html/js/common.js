$(function() {

    'use strict';

    //*****************************************************//
    //FIRST SCREEN SLIDER
    //*****************************************************//
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


    //*****************************************************//
    //REVIEWS SLIDER
    //*****************************************************//

    $('.reviews__box').addClass('owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
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

    //*****************************************************//
    //Product Gallery
    //*****************************************************//

    var images = Array();
    $('.product__gallery').find('.product__gallery-item').each(function() {
        images.push($(this).html());
    }).end().addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        onInitialized: function() {
            $('.owl-dot').each(function() {
                $(this).html(images[$(this).index()]);
            });
        }
    });

    //*****************************************************//
    //Product Description
    //*****************************************************//

    $('.product__description').each(function() {
        var $this = $(this),
            $productDescriptionText = $this.find('.product__description-text'),
            height = $productDescriptionText.height();
        if ( height >= 130 ) {
            $productDescriptionText.css({'max-height':'12.8rem'}).after('<button class="product__description-button">Развернуть</button>');
        }

        $this.on('click', '.product__description-button', function() {
            var $this = $(this);
            if ( !$this.hasClass('active') ) {
                $this.addClass('active').text('Свернуть')
                .closest('.product__description').find($productDescriptionText).css({'max-height': height + 'px'})
            } else {
                $this.removeClass('active').text('Развернуть')
                .closest('.product__description').find($productDescriptionText).css({'max-height': '12.8rem'});
            }
        });
    });

    //*****************************************************//
    //Product Tabs
    //*****************************************************//

    $('.product__tabs').each(function() {
        var $this = $(this);
        $this.prepend('<div class="product__tabs-buttons"></div>')
        .find('.product__tabs-item').each(function() {
            $(this).find('.product__tabs-title').addClass( $(this).index() === 1 ? 'active' : '' ).appendTo('.product__tabs-buttons');
        }).not(':first').hide();
        $this.find('.product__tabs-buttons').on('click', '.product__tabs-title:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('.product__tabs').find('.product__tabs-item').slideUp(300).eq($(this).index()).slideDown(300);
        });
    });

    //*****************************************************//
    // Google Map
    //*****************************************************//
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

    //*****************************************************//
    //Chrome Smooth Scroll
    //*****************************************************//
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

    //*****************************************************//
    //Fullscreen Header for IE
    //*****************************************************//

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
