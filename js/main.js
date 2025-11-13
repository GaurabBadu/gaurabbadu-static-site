(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-down"></i>'
        ],
    });


    // attractions carousel
    $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Horizontal scroll for projects
document.addEventListener("DOMContentLoaded", function() {
    const scrollAmount = 300; // pixels per click

    const rows = document.querySelectorAll(".projects-row"); // give your rows this class
    rows.forEach(row => {
        const leftBtn = row.parentElement.querySelector(".scroll-btn.left");
        const rightBtn = row.parentElement.querySelector(".scroll-btn.right");

        if (leftBtn) {
            leftBtn.addEventListener("click", () => {
                row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
        if (rightBtn) {
            rightBtn.addEventListener("click", () => {
                row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    });
});

    document.addEventListener("DOMContentLoaded", function() {
    const scrollAmount = 300;

    const scrollSections = [
        { rowId: "solid-row", leftId: "solid-left", rightId: "solid-right" },
        { rowId: "arduino-row", leftId: "arduino-left", rightId: "arduino-right" },
        { rowId: "python-row", leftId: "python-left", rightId: "python-right" },
    ];

    scrollSections.forEach(section => {
        const row = document.getElementById(section.rowId);
        const leftBtn = document.getElementById(section.leftId);
        const rightBtn = document.getElementById(section.rightId);

        if (leftBtn) {
            leftBtn.addEventListener("click", () => {
                row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener("click", () => {
                row.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    });
});




})(jQuery);
