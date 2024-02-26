const carouselChangeWidth = (carousel) => {
    try {
        const slider = document.querySelector(carousel),
              wrapper = slider.querySelector('.changeWidth-wrapper'),
              btnLeft = slider.querySelector('.arrow_left'),
              btnRight = slider.querySelector('.arrow_right');
    
        let isDragStart = false, isDragging = false, prevPageX, positionDiff;
    
        positionSlides();
    
        btnLeft.addEventListener('click', moveLeft);
        
        btnRight.addEventListener('click', moveRight);
        
    
        window.addEventListener('resize', positionSlides);    
        
        function moveLeft() {
            let slides = wrapper.querySelectorAll('.changeWidth-slide');
            wrapper.appendChild(slides[0]);
            positionSlides();
            btnLeft.removeEventListener('click', moveLeft);
            btnRight.removeEventListener('click', moveRight);
            setTimeout(() => {
                btnLeft.addEventListener('click', moveLeft);
                btnRight.addEventListener('click', moveRight);
            }, 700);
        }
        function moveRight() {
            let slides = wrapper.querySelectorAll('.changeWidth-slide');
            wrapper.prepend(slides[slides.length - 1]);
            positionSlides();
            btnLeft.removeEventListener('click', moveLeft);
            btnRight.removeEventListener('click', moveRight);
            setTimeout(() => {
                btnLeft.addEventListener('click', moveLeft);
                btnRight.addEventListener('click', moveRight);
            }, 700);
        }
    
        
        function positionSlides() {
            let slides = wrapper.querySelectorAll('.changeWidth-slide');
            if (slides.length == 7) {
                if (window.screen.availWidth > 1024) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 162px;
                        height: 164px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '-180px';
                    slides[1].style.left = '0';
                    slides[2].style.left = '180px';
                    slides[3].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 333px;
                        height: 324px;
                        z-index: 3;
                    `;
                    slides[4].style.cssText = `
                        left: calc(100% - 340px);
                        z-index: 2;
                    `;
                    slides[5].style.left = 'calc(100% - 162px)';
                    slides[6].style.left = 'calc(100% + 20px)';
                } else if (window.screen.availWidth <= 1024 && window.screen.availWidth > 768) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 142px;
                        height: 144px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '-100px';
                    slides[1].style.left = '0';
                    slides[2].style.left = '20%';
                    slides[3].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 280px;
                        height: 270px;
                        z-index: 3;
                    `;
                    slides[4].style.cssText = `
                        left: 63%;
                        z-index: 2;
                    `;
                    slides[5].style.left = 'calc(100% - 142px)';
                    slides[6].style.left = 'calc(100%)';
                } else if (window.screen.availWidth <= 768 && window.screen.availWidth > 576) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 122px;
                        height: 124px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '-20px';
                    slides[1].style.left = '0';
                    slides[2].style.left = '15%';
                    slides[3].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 220px;
                        height: 210px;
                        z-index: 3;
                    `;
                    slides[4].style.cssText = `
                        left: 65%;
                        z-index: 2;
                    `;
                    slides[5].style.left = '80%';
                    slides[6].style.left = 'calc(100%)';
                } else if (window.screen.availWidth <= 576) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 122px;
                        height: 124px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '-124px';
                    slides[1].style.left = '-124px';
                    slides[2].style.left = '-124px';
                    slides[3].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 100%;
                        height: 100%;
                        z-index: 3;
                    `;
                    slides[4].style.cssText = `
                        left: 100%;
                        z-index: 2;
                    `;
                    slides[5].style.left = '100%';
                    slides[6].style.left = '100%';
                }
            }
            
            if (slides.length == 5) {
                
                if (window.screen.availWidth > 1024) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 162px;
                        height: 164px;
                        filter: grayscale(100%);
                    `);
    
                    slides[0].style.left = '0';
                    slides[1].style.left = '180px';
                    slides[2].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 333px;
                        height: 324px;
                        z-index: 3;
                    `;
                    slides[3].style.cssText = `
                        left: calc(100% - 340px);
                        z-index: 2;
                    `;
                    slides[4].style.left = 'calc(100% - 162px)';
                } else if (window.screen.availWidth <= 1024 && window.screen.availWidth > 768) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 142px;
                        height: 144px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '0';
                    slides[1].style.left = '20%';
                    slides[2].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 280px;
                        height: 270px;
                        z-index: 3;
                    `;
                    slides[3].style.cssText = `
                        left: 63%;
                        z-index: 2;
                    `;
                    slides[4].style.left = 'calc(100% - 142px)';
                } else if (window.screen.availWidth <= 768 && window.screen.availWidth > 576) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 122px;
                        height: 124px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '-122px';
                    slides[1].style.left = '0';
                    slides[2].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 220px;
                        height: 210px;
                        z-index: 3;
                    `;
                    slides[3].style.cssText = `
                        left: calc(100% - 122px);
                        z-index: 2;
                    `;
                    slides[4].style.left = '100%';
                } else if (window.screen.availWidth <= 576) {
                    wrapper.querySelectorAll('.changeWidth-slide').forEach(slide => 
                        slide.style.cssText = `
                        width: 122px;
                        height: 124px;
                        filter: grayscale(100%);
                    `);
                    slides[0].style.left = '-124px';
                    slides[1].style.left = '-124px';
                    slides[2].style.cssText = `
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        filter:grayscale(0);
                        width: 100%;
                        height: 100%;
                        z-index: 3;
                    `;
                    slides[3].style.cssText = `
                        left: 100%;
                        z-index: 2;
                    `;
                    slides[4].style.left = '100%';
                }
            }
        }
    
    
        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
        }
        
        const dragging = (e) => {
            if(!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        }
        
        const dragStop = () => {
            isDragStart = false;
            
            if(!isDragging) return;
            isDragging = false;
            if (positionDiff > 0) {
                moveRight();
            } else {
                moveLeft();
            }
        }
        
        slider.addEventListener("mousedown", dragStart);
        slider.addEventListener("touchstart", dragStart);
        
        document.addEventListener("mousemove", dragging);
        slider.addEventListener("touchmove", dragging);
        
        document.addEventListener("mouseup", dragStop);
        slider.addEventListener("touchend", dragStop);
        
    } catch (error) {
        
    }
}

export default carouselChangeWidth;