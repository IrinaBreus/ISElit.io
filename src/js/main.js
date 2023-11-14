import carouselAuto from "./modules/carousel-auto";
import dropdown from "./modules/dropdown";
import forms from "./modules/forms";
import hamburger from "./modules/hamburger";
import sliderComments from "./modules/sliderComments";


document.addEventListener('DOMContentLoaded', () => {
'use stricti';

dropdown();
hamburger();
sliderComments('.reviews__comments', '.reviews__dots');
sliderComments('.works__comments', '.works__dots');
forms('.feedback__btn', '.feedback__form');
forms('.action-header__btn', '.action-header__form');
carouselAuto();
});