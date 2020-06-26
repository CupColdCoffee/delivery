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

    function validateForms (form) {
        $(form).validate ({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                name: false,
                phone: false,
                email: {
                    required: false,
                    email: false
                },
                message: false
            }
        });
    }

    validateForms('#questions-form'); 
    validateForms('#consultation-form'); 

    $('input[name=phone]').mask("+7 (999) 999-99-99");
      
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


});