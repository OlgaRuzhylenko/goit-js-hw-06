
const list = document.querySelector("#categories");

const itemsOfMainList = list.children;

const numberOfСategories = `Number of categories: ${itemsOfMainList.length}`;
console.dir(numberOfСategories);

[...list.children].forEach((item) => {
    const titleOfCategories = item.firstElementChild.textContent;
    console.dir(`Category: ${titleOfCategories}`);
    const numberOfCategoreItems = item.lastElementChild.children.length;
console.dir(`Elements: ${numberOfCategoreItems}`);
});


