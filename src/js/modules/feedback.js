const feedback = () => {
    const trigger = document.querySelector('.feedback__btn'),
          form = document.querySelector('.feedback__form'),
          btnClose = document.querySelector('.feedback__close'),
          btnSubmit  = form.querySelector('button');

    trigger.addEventListener('click', () => {
        form.style.display = 'block';
    })
    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        trigger.style.display = 'none';
        trigger.previousElementSibling.style.display = 'block';
        trigger.previousElementSibling.previousElementSibling.style.display = 'none';

        setTimeout(() => {
            document.querySelector('.feedback').style.display = 'none';
        }, 3000);
    });

    btnClose.addEventListener('click', () => {
        form.style.display = 'none';
    })
}

export default feedback;