// ----------------------------------------==================================
$(document).ready(function() {


    //========================== loading page ================
    $(window).on('load', function() {
        $('.loading').fadeOut(2000)
    });




    //======================      Start Navbar color     .................................
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 140) {
            $("nav").css({
                "backgroundColor": "#1a1a1a",
                "padding": "20px 0",
                "box-shadow": "8px 0 5px #000"
            });
        } else {
            $("nav").css({
                "backgroundColor": "transparent",
                "padding": "20px 0",
                "box-shadow": "none"
            });
        }
    });

    //====================== when you refresh at anywhere at page slidbar will make the same effect       .......................................
    if ($(window).scrollTop() >= 140) {
        $("nav").css({
            "backgroundColor": "#1a1a1a",
            "padding": "20px 0",
            "box-shadow": "8px 0 5px #000"
        });
    } else {
        $("nav").css({
            "backgroundColor": "transparent",
            "padding": "20px 0",
            "box-shadow": "none"
        });
    }



    //======================  Smppth Scroll   .........................................................
    $('nav .nav-links li a,.button-scroll').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        }, 1000);
    });



    //======================   Add active links   ........................................................
    $('nav .nav-links li a').on('click', function() {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    });


    $(window).scroll(function() {
        $('section').each(function() {
            if ($(window).scrollTop() + 100 >= $(this).offset().top) {
                var sectionid = $(this).attr('id');
                $('nav .nav-links li a').removeClass('active');
                $('nav .nav-links li a[data-scroll ="' + sectionid + '"]').addClass('active')
            }
        })
    });


    //======================     owl carousel            .......................................................
    $(".owl-carousel").owlCarousel({
        autoPlay: 1000,
        items: 1,
        center: true,
        nav: true,
        dots: false,
        loop: true,
        autoPlay: true,
        animateOut: 'fadeOut',
        smartSpeed: 350,
    });




    //......................    when click button up   ...................................................
    $('.up').on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });




});

// start testmonials section
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});