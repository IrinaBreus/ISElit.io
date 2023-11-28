const tabs = (containerID) => {
    try {
        const tabContainer = document.querySelector(containerID),
              headers = tabContainer.querySelectorAll('.tab-header__item'),
              contents = tabContainer.querySelectorAll('.tab-content'),
              plusBtns = tabContainer.querySelectorAll('.tab-content__plus-btn');
    
    
        showContent(0);
    
        headers.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                clearActiveClass();
                showContent(i);
                elem.classList.add('tab-active');
            })
        });

        plusBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('rotate');
                btn.nextElementSibling.classList.toggle('show');
            })
        });
    
        function clearActiveClass() {
            headers.forEach(elem => elem.classList.remove('tab-active'));
        }
        function showContent(i) {
            contents.forEach(item => {
                item.style.display = 'none';
            });
            contents[i].style.display = '';
        }
    } catch (error) {}
}

export default tabs;