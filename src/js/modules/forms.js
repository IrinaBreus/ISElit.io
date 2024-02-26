import mask from "./mask";

const forms = (triggerS, formS) => {
    try {
        const trigger = document.querySelector(triggerS),
              form = document.querySelector(formS),
              btnClose = form.querySelector('.form__close'),
              btnSubmit  = form.querySelector('button');
    
        mask();
        trigger.addEventListener('click', () => {
            form.style.display = 'block';
        })
        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            if (form.classList.contains('feedback__form')) {
                trigger.style.display = 'none';
                trigger.previousElementSibling.style.display = 'block';
                trigger.previousElementSibling.previousElementSibling.style.display = 'none';
        
                setTimeout(() => {
                    document.querySelector('.feedback').style.display = 'none';
                }, 3000);
            }
        });
    
        btnClose.addEventListener('click', () => {
            form.style.display = 'none';
        })
    } catch(e) {}
}

export default forms;