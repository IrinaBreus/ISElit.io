const hamburger = () => {
    const trigger = document.querySelector('.hamburger-btn'),
          content = document.querySelector('.hamburger');

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('hamburger-btn__active');
        content.classList.toggle('hamburger__active');

    })
}

export default hamburger;