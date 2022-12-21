const categoriesEl = document.querySelectorAll(".item");
const countCategories = `Number of categories: ${categoriesEl.length}`;

console.log(countCategories);

const categoryAndQuantityArray = [...categoriesEl].map(item => {
    const itemHeader = item.firstElementChild.textContent;
    const itemMessageEl = `Category: ${itemHeader}`;

    const itemList = item.lastElementChild.children;
    const countItems = `Elements: ${itemList.length}`;

    return `${itemMessageEl} ${countItems}`;
})
const categoryAndQuantity = categoryAndQuantityArray.join(" ");
console.log(categoryAndQuantity);