const dropdown = () => {
    const dropdown = document.querySelector('.dropdown'),
          content = document.querySelector('.dropdown-content');

    let timerId;

    dropdown.addEventListener('mouseenter', () => {
        if (content.style.display = 'none') {
            showContent();
        }
    });

    dropdown.addEventListener('mouseleave', () => {
        timerId = setTimeout(() => {
            hiddenContent();
        }, 1000);
    });

    content.addEventListener('mouseenter', () => {
        showContent();
        clearTimeout(timerId);
    });

    content.addEventListener('mouseleave', () => {
        hiddenContent();
    });

    function showContent() {
        content.style.display = 'block';
    }
    
    function hiddenContent() {
        content.style.display = 'none';
    }
}
export default dropdown;