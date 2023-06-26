$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    });

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });


    /*   $('.mobile_btn').on('click', function () {
          $('.gnb').toggleClass('on');
      }); */

    $('.gnb .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this)
                .next()
                .stop()
                .slideToggle();
            $(this)
                .parent()
                .siblings()
                .find('.sub')
                .stop()
                .slideUp();
        }
    });


    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
})