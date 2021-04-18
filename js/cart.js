$(document).ready(function () {

    $(".menu_icon").on("click", function (e) {
        $(".menu").slideToggle();
    });

    $(".favorite").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
    });

    
});