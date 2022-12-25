function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  butCreateEl: document.querySelector('[data-create]'),
  butDestroyEl: document.querySelector('[data-destroy]'),
};
console.log(refs.butDestroyEl)