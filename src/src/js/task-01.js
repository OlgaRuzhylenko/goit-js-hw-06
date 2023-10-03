//доступ до списку із необхіним id 
const list = document.querySelector("#categories");
// console.dir(list);
//виведення тексту, що знаходиться у списку
// console.dir(list.textContent);

//знаходження і виведення всіх дітей - лішок списку
const allListItem = list.children;
// console.dir(allListItem);
//використали спред
// console.log([...list.children])

const numberOfItem = `Number of categories: ${allListItem.length}`;
console.dir(numberOfItem);


[...list.children].forEach((item) => {
    const itemNameOfTitle = item.firstElementChild.textContent;
console.dir(`Category: ${itemNameOfTitle}`);
});




