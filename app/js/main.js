window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    $(document).ready(function () {
        $('.main-slider__box').slick(
            {
                dots: true,
                infinite: true,
                speed: 500,
                // fade: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000
              }
        );
    });
//





});