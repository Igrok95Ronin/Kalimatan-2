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
        let width = window.screen.availWidth;
        window.addEventListener('resize', function () {
            width = window.screen.availWidth;
        });/* ширина окна браузера */

        window.addEventListener('scroll', () => {

            const header = document.querySelector('.header');
            const btnFixed__btnTopFixedNone = document.querySelector('.btnFixed__btnTopFixedNone');


            if (width > 767 && scrollY > 200) {
                header.classList.add('header__fixed');
            } else {
                header.classList.remove('header__fixed');
            }

            if (scrollY > 150) {
                btnFixed__btnTopFixedNone.classList.add('btnFixed__btnTopFixed');
            } else {
                btnFixed__btnTopFixedNone.classList.remove('btnFixed__btnTopFixed');
            }

        });


        //paroller
        $('.my-paroller').paroller();

        //menu
        const header__arrow = document.querySelector('.header__arrow');
        
        header__arrow.addEventListener('click', e => {
            e.preventDefault();
        });

        //menu-burger
        const btn = document.querySelector('.header-burger-btn');
        const navbar = document.querySelector('.header_navbar');

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('header-burger-btn-active');
            navbar.classList.toggle('header-burger-btn-active');
            header_navbar__ul.classList.remove('header_navbar__ul-active');
        });

        //header_navbar__li
        const header_navbar__arrow = document.querySelector('.header_navbar__arrow');
        const header_navbar__ul = document.querySelector('.header_navbar__ul');

        header_navbar__arrow.addEventListener('click', function (e) {
            e.preventDefault();
            header_navbar__ul.classList.toggle('header_navbar__ul-active');
            header_navbar__arrow.classList.toggle('header_navbar__arrow-active');

        });

        //




    });
    //



});