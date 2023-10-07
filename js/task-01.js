//доступ до списку із необхіним id 
const list = document.querySelector("#categories");
// console.dir(list);
//виведення тексту, що знаходиться у списку
// console.dir(list.textContent);

//знаходження і виведення всіх дітей - лішок списку
const itemsOfMainList = list.children;
// console.dir(itemsOfMainList);

const numberOfСategories = `Number of categories: ${itemsOfMainList.length}`;
console.dir(numberOfСategories);

// робимо спред і перебираємо масив. Виводимо текстовий контент першого леемента li (це h2) і тут же достукуємося до останнього елемента li (це ul) і рахуємо його довжину
[...list.children].forEach((item) => {
    const titleOfCategories = item.firstElementChild.textContent;
    console.dir(`Category: ${titleOfCategories}`);
    const numberOfCategoreItems = item.lastElementChild.children.length;
console.dir(`Elements: ${numberOfCategoreItems}`);
});


