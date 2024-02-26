import carouselAuto from "./modules/carousel-auto";
import carouselChangeWidth from "./modules/carousel-change-width";
import dropdown from "./modules/dropdown";
import forms from "./modules/forms";
import hamburger from "./modules/hamburger";
import mask from "./modules/mask";
import scrollUp from "./modules/scrollUp";
import tabs from "./modules/tabs";
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';



document.addEventListener('DOMContentLoaded', () => {
'use stricti';

dropdown();
hamburger();
forms('.feedback__btn', '.feedback__form');
forms('.action-header__btn', '.action-header__form');
carouselAuto('.hairdresser-all');
carouselAuto('.manicure-all');
tabs('#allCoursesBarber');
tabs('#allCoursesManicure');
tabs('#coursesBarber');
tabs('#coursesManicure');
carouselChangeWidth('.changeWidth-slider_1');
carouselChangeWidth('.changeWidth-slider_2');
mask();
scrollUp();

Swiper.use(Pagination);

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoHeight: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    },
    grabCursor: true,
    centeredSlidesBounds: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoHeight: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    },
    grabCursor: true,
    centeredSlidesBounds: true,
  });
    swiper1;
    swiper2;
});