$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 800) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    });
});
