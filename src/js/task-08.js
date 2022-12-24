const refs = {
    email: document.getElementsByName('email'),
    password: document.getElementsByName('password'),
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
        return alert('Всі поля форми повинні бути заповнені!');
    };

    const formEls = event.currentTarget.elements;
    const email = formEls.email.value;
    const password = formEls.password.value;
    const formData = { email, password };
    console.log(formData);

     event.currentTarget.reset();
}