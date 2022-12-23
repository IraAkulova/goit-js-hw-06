const inputEl = document.querySelector('#validation-input');
const dataLengthEl = document.querySelector('input[data-length="6"]');

inputEl.classList.add('invalid');
const onInputBlure = (event) => 
    event.currentTarget.value.length === Number(inputEl.dataset.length)
        ? event.currentTarget.classList.replace('invalid', 'valid')
        : event.currentTarget.classList.replace('valid', 'invalid')
;
inputEl.addEventListener('blur', onInputBlure)
