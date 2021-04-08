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
        title: 'Email Me:',
        html: '<form id="form">' +
            '<div class="form-group"><label>Name</label><input type="text" class="form-control" required name="from_name" /></div>' +
            '<div class="form-group"><label>Email</label><input type="email" class="form-control" name="reply_to" /></div>' +
            '<div class="form-group"><label>Subject</label><input type="text" name="subject" required class="form-control" /></div>' +
            '<div class="form-group"><label>Message</label><textarea type="text" class="form-control" required' +
            'name="message"></textarea></div>' +
            '<div class="form-group"><input id="button" type="submit" value="Send Email" class="btn btn-primary" /></div>' +
            '</form>',
        //html: '<form id="form"><div class="form-group"><label>Name</label><input type="text" class="form-control" required name="from_name" /></div><div class="form-group"><label>Email</label><input type = "email" class="form-control" name="reply_to" /></div><div class="form-group"><label>Subject</label><input type="text" name="subject" required class="form-control" /></div><div class="form-group"><label>Message</label><textarea type="text" class="form-control" required name="message"></textarea></div><div class="form-group"><input id="button" type="submit" value="Send Email" class="btn btn-primary" /></div></form>',
        showConfirmButton: false,
    });
}

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_zfqx8i9';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });