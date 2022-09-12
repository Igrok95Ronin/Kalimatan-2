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
//slider two
        $('.about__box').slick(
            {
                dots: false,
                infinite: true,
                speed: 500,
                // fade: true,
                arrows: true,
                // autoplay: true,
                autoplaySpeed: 5000
              }
        );

//Scroll
        window.addEventListener('scroll', () => {

            const header = document.querySelector('.header');

            if(scrollY > 150) {
                header.classList.add('header__fixed');
            }else {
                header.classList.remove('header__fixed');
            }

          });
          
   
   
   
   
   
    });
//





});