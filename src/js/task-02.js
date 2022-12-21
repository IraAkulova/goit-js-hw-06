const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredientsEl = document.querySelector("#ingredients")

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList = "item";
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

console.log(ingredientsEl);

allIngredientsEl.append(...ingredientsEl);