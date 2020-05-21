$(document).ready(function(){

    $('.reviews__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png" alt=""></button>'
    });
});