$(".ScrollSec1").click(function() {
    $('html, body').animate({
        scrollTop: $(".articleBlue").offset().top
    }, 800);
});

$(".ScrollSec2").click(function() {
    $('html, body').animate({
        scrollTop: $(".articleWhite").offset().top
    }, 800);
});

$(".ScrollSec3").click(function() {
    $('html, body').animate({
        scrollTop: $(".articleHouse").offset().top
    }, 800);
});

$("#ScrollToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});