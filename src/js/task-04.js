let counterValue = 0;
const refs = {
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector("#value"),
}

const onButtonDecrementClick = (event) => {
    counterValue -= 1;
    refs.span.textContent = counterValue;
};
refs.buttonDecrement.addEventListener("click", onButtonDecrementClick);

const onButtonIncrementClick = (event) => {
    counterValue += 1;
    refs.span.textContent = counterValue;
};
refs.buttonIncrement.addEventListener("click", onButtonIncrementClick);
            