$(document).ready(function () {
    $('.fa-bars').on('click', function () {
        $('.menu-toggle').css('display', 'initial');
    });

    $('.fa-x').on('click', function () {
        $('.menu-toggle').css('display', 'none');
    });

});