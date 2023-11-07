import dropdown from "./modules/dropdown";
import feedback from "./modules/feedback";
import hamburger from "./modules/hamburger";
import sliderComments from "./modules/sliderComments";


document.addEventListener('DOMContentLoaded', () => {
'use stricti';

dropdown();
hamburger();
sliderComments('.reviews__comments', '.reviews__dots');
sliderComments('.works__comments', '.works__dots');
feedback();
});