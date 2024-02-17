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

    $(".project").mouseenter(function() {
        $(this).find(".img-project").css("opacity", "1"); // Define a opacidade para 1 apenas na imagem dentro do elemento .project que está sendo interagido
    }).mouseleave(function() {
        $(this).find(".img-project").css("opacity", "0.5"); // Define a opacidade de volta para 0.5 na imagem dentro do elemento .project que está sendo interagido
    });
});