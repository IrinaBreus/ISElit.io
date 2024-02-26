const carouselDragToush = () => {
    const slider = document.querySelector('.reviews__comments-slider'),
    field = slider.querySelector('.slider__field'),
    slides = field.querySelectorAll('.slide'),
    width = slides[0].getBoundingClientRect().width,
    margin = parseInt(getComputedStyle(slides[0]).marginRight),
    dotsContainer = slider.querySelector('.dots__container');

    let posInitial, 
        posX1 = 0,
        posX2 = 0,
        posFinal,
        allowShift = true,
        slidesSize = field.querySelectorAll('.slide')[0].offsetWidth,
        index = 0,
        dotIndex = 0;
    
    createFieldStyle();
    createDots();
    
    let dots = document.querySelectorAll('.dot');
    dots[dotIndex].classList.add('dot-active');
    
    field.addEventListener('mousedown', dragStart);

    field.addEventListener('touchstart', dragStart);
    field.addEventListener('touchend', dragEnd);
    field.addEventListener('touchmove', dragAction);

    function dragStart(e) {
        e = e || window.Event;
        e.preventDefault();
        posInitial = field.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.toushes[0].clientX;
        } else {
            posX1 = e.clientX;
            document.addEventListener('mouseup', dragEnd);
            document.addEventListener('mousedown', dragAction);
        }
    }

    function dragAction(e) {
        e = e || window.Event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        field.style.transform = `translateX(-${field.offsetLeft - posX2}px)`;
    }

    function dragEnd() {
        posFinal = field.offsetLeft;
        if (posFinal - posInitial < -100) {
            shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > 100) {
            shiftSlide(-1, 'drag');
        } else {
            field.style.left = `${posInitial}px`;
        }
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('mousedown', dragAction);
    }

    function shiftSlide (dir, action) {
        field.classList.add('shifting');
        if (allowShift) {
            if (!action) { posInitial = items.offsetLeft; }
            if (dir == 1) {
                field.style.transform = `translateX(-${posInitial - slidesSize}px)`;
                index++;
            } else if(dir == -1) {
                field.style.transform = `translateX(-${posInitial + slidesSize}px)`;
                index--;
            }
        };

        allowShift = false;
    }

    function createFieldStyle () {
        let widthSlide = width + margin;
        
        slides.forEach(slide => {
            slide.style.width = `${width}px`;
            slide.style.marginRight = margin;
        });
        
        slides[slides.length - 1].style.marginRight = 0;
        field.style.cssText = `
        width: ${slides.length * widthSlide - margin}px;
        display: flex;
        `
    }
    
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        }
    }
    
    
    function dotActive(n) {

        // dots[n].classList.add('dot-active');
    }
    
}

export default carouselDragToush;