const dropdown = () => {
    const dropdown = document.querySelector('.dropdown'),
          content = document.querySelector('.dropdown-content');

    let timerId;

    dropdown.addEventListener('mouseover', () => {
        if (content.style.display = 'none') {
            content.style.display = 'block';
        }
    });

    dropdown.addEventListener('mouseout', () => {
        timerId = setTimeout(() => {
            content.style.display = 'none';
        }, 500);
    });

    content.addEventListener('mouseover', () => {
        content.style.display = 'block';
        clearTimeout(timerId);
    });

    content.addEventListener('mouseout', () => {
        content.style.display = 'none';
    });
}


export default dropdown;