/*!
 * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict



// sweet button hire me
function sweetAlert() {
    Swal.fire({
        /* Popup window position, can be 'top', 'top-start', 'top-end', 
        'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 
        or 'bottom-end'.*/
        position: 'center',
        //icon: 'success',
        width: 400,
        title: 'Get In Touch:',
        text: `Email: Amadeusrm97@gmail.com \n
        Phone: 470-422-5264`,
        // padding: 20,
        showConfirmButton: false,
        //timer: 40000
    });
}