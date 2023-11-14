const carouselAuto = () => {
    try {
        const images = document.querySelectorAll('.courses-header__img');
        
        let index = 0;

        hidden();
        images[index].style.opacity = 1;

        setInterval(() => {
            hidden();
            images[index].style.opacity = 1;;
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
        }, 5000);

        function hidden() {
            images.forEach(img => {
                img.style.opacity = 0;
            })
        }
    } catch (error) {}
}

export default carouselAuto;