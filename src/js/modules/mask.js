const mask = () => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
        elem.addEventListener('click', () => {
            elem.selectionStart = elem.selectionEnd = elem.value.length;
        })
    }

    function createMask(event) {
        let matrix = '+7 (___) ___-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }
        
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

         if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
         } else {
            setCursorPosition(this.value.length, this);
         }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        // input.addEventListener('click', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    })

}

export default mask;