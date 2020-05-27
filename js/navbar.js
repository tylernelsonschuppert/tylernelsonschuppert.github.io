//Solves a bug where clicking on a nav link in an expanded nav menu within a mobile layout doesn't close the nav menu
$('.nav-link').on( "click", function() {
    if($('#navbarSupportedContent').hasClass("show")) {
        $('#navbar_button').click();
    }
});