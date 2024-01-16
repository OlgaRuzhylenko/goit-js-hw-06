const list = document.querySelector('#categories');
const items = list.children;
console.log(items);

console.log(items.length);

[...items].forEach((item)=> {
const titles = item.firstElementChild.textContent;
console.log(titles);
const titlesList = item.lastElementChild.children.length;
console.log(titlesList);
})