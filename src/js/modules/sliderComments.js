const sliderComments = (fieldS, dotsS) => {
    try {
        const field = document.querySelector(fieldS),
              box = field.querySelectorAll('.comment'),
              dotsContainer = document.querySelector(dotsS);
    
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
    
        field.addEventListener('mousedown', (e) => {
            e.preventDefault();
            x1 = e.clientX;
        });
    
        field.addEventListener('mouseup', (e) => {
            e.preventDefault();
            let x2 = e.clientX;
            let diff = x2 - x1;
            if (diff > 0) {
                movieRight();
            }
            if (diff < 0) {
                movieLeft();
            }
        });
        
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                dotActive(i);
                offset = width * i;
                field.style.transform = `translateX(-${offset}px)`;
            })
        });
    
       function movieRight() {
            if (offset == 0) {
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
            function movieLeft() {
                if (dotIndex >= box.length - 1 ) {
                    return;
                } else {
                    dotIndex += 1;
                }
        
                if (offset <= width * box.length - 2) {
                    offset += width;
                } 
        
                
                field.style.transform = `translateX(-${offset}px)`;
                dotActive(dotIndex);
            }
            function createDots() {
                for (let dot of box) {
                    dot = document.createElement('div');
                    dot.classList.add('dot');
                    dotsContainer.append(dot);
                }
            }
            function dotActive(i) {
                let dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach(dot => {
                    dot.classList.remove('dot-active');
                });
                dots[i].classList.add('dot-active');
            }
        }
        } catch (e) {}
    }




export default sliderComments;