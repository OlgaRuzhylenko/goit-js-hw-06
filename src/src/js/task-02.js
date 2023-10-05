const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//Достукуємось до List
const list = document.querySelector('#ingredients');
console.log(list);
//створюємо кожну li і додаємо їй текстовий контент
const li = document.createElement('li');
li.textContent = 'Potatoes';
li.classList.add('item')
console.log(li);
const li2 = document.createElement('li');
li2.textContent =  'Mushrooms';
li2.classList.add('item')
console.log(li2);
const li3 = document.createElement('li');
li3.textContent = 'Garlic';
li3.classList.add('item')
console.log(li3);
const li4 = document.createElement('li');
li4.textContent = 'Herbs';
li4.classList.add('item')
console.log(li4);
const li5 = document.createElement('li');
li5.textContent = 'Condiments';
li5.classList.add('item')
console.log(li5);
//додаємо li в list в DOM
list.append(li, li2, li3, li4, li5);