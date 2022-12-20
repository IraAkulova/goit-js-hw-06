const categoriesEl = document.querySelectorAll(".item");
const countCategories = `Number of categories: ${categoriesEl.length}`;

console.log(countCategories);


const itemEl = document.querySelector(".item");
const itemHeader = itemEl.firstElementChild.textContent;
const itemMessageEl = `Category: ${itemHeader}`;
console.log(itemMessageEl);


const itemList = itemEl.lastElementChild.children;
const countItems = `Elements: ${itemList.length}`;

console.log(countItems);