$(document).ready(function () {
    $('.fa-bars').on('click', function () {
        $('.menu-toggle').css('display', 'initial');
        setTimeout(function () {
            $('.menu-toggle').css('left', '0').css('display', 'initial');
        }, 100); // 100 milissegundos de atraso
    });

    $('.fa-x').on('click', function () {
        $('.menu-toggle').css('left', '-61%');
        setTimeout(function () {
            $('.menu-toggle').css('display', 'none');
        }, 500); // 500 milissegundos de atraso
    });

});