const sliderComments = () => {
    const field = document.querySelector('.reviews__comments'),
          box = document.querySelectorAll('.comment'),
          dotsContainer = document.querySelector('.comment__dots');

    let width,
        x1 = 0,
        offset = 0,
        dotIndex = 0;
        
    createDots();
    dotActive(0);
        
    box.forEach(elem => {
        width = parseInt(window.getComputedStyle(elem).width) - (parseInt(window.getComputedStyle(elem).marginRight) * 2);
    })
    
    field.style.width = 100 * width + '%';
    field.style.display = 'flex';

    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
        x1 = e.clientX;
    });

    document.addEventListener('mouseup', (e) => {
        e.preventDefault();
        let x2 = e.clientX;
        let diff = x2 - x1;
        if (diff > 0) {
            console.log('right');
            movieRight();
        }
        if (diff < 0) {
            console.log('left');
            movieLeft();
        }
    });
    
    function movieRight() {
        if (offset == 0) {
            // offset = width * (box.length - 2);
            return;
        } else {
            offset -= width;
        }
        if (dotIndex < 0) {
            return;
        } else {
            dotIndex--;
        }
        field.style.transform = `translateX(-${offset}px)`;
        dotActive(dotIndex);
        console.log(dotIndex);
    }

    function movieLeft() {
        if (dotIndex >= box.length - 1 ) {
            return;
        } else {
            dotIndex += 1;
        }

        if (offset <= width * box.length - 2) {
            // offset = 0;
            offset += width;
            // return;
        } 
        // else {
        // }

        
        field.style.transform = `translateX(-${offset}px)`;
        dotActive(dotIndex);
        console.log(dotIndex);
    }


    function createDots() {
        for (let dot of box) {
            dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.append(dot);
        }
    }
    function dotActive(i) {
        let dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.classList.remove('dot-active');
        });
        dots[i].classList.add('dot-active');
    }
}

export default sliderComments;