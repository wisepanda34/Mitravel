// import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
//import "swiper/swiper-bundle.css";
// flsFunctions.isWebp();
// import '~swiper/css/bundle';

//import Swiper, { Navigation, Pagination } from 'swiper';
// const swiper = new Swiper();
const htmlElement = document.documentElement;
let burger, close, menu, menuItem, slider1, slider2;
burger = document.querySelector('.burger');
close = document.querySelector('.menu__close');
menu = document.querySelector('.menu');
menuItem = document.querySelectorAll('.menu__item');
slider1 = document.querySelector('.main-slider');
slider2 = document.querySelector('.feat-slider__container');

let firstSlider = new Swiper( slider1,{
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    slideToClickedSlide: true,

    fadeEffect: {
        crossFade: true,
    },
    effect: "fade",

    navigation: {
        nextEl: '.main-slider__next',
        prevEl: '.main-slider__prev',
    },
});



let featuredSlider = new Swiper( slider2, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
    slideToClickedSlide: true
});


burger.addEventListener('click',() => {
    menu.classList.add('menu-visible');
});


close.addEventListener('click',() => {
    menu.classList.remove('menu-visible');
});

menuItem.forEach(item =>
    item.addEventListener('click', () => {
        menu.classList.remove('menu-visible');
    }))
