$(".ScrollSec1").click(function() {
    $('html, body').animate({
        scrollTop: $(".startSection").offset().top
    }, 1000);
});

$(".ScrollSec2").click(function() {
    $('html, body').animate({
        scrollTop: $(".webdevSection").offset().top
    }, 1000);
});

$(".ScrollSec3").click(function() {
    $('html, body').animate({
        scrollTop: $(".refSection").offset().top
    }, 1000);
});

$(".ScrollSec4").click(function() {
    $('html, body').animate({
        scrollTop: $(".aboutSection").offset().top
    }, 1000);
});

$(".ScrollSec5").click(function() {
    $('html, body').animate({
        scrollTop: $(".contactSection").offset().top
    }, 1000);
});

$("#ScrollToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$("#showDesignDiv").click(function(e) {
$("#designDiv").toggle( "slow", function(e) {
    
});
    return false;
});

$("#showPublishDiv").click(function(e) {
$("#publishDiv").toggle( "slow", function(e) {
    
});
    return false;
});