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

//перебираємо за доп map вказаний масив ingredients
const allIngredients = ingredients.map((ingredient) => {
  //створюємо собі всі li
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  console.log(li);
  //якщо не повернемо, то буде undef
  return li;
})
//додаємо li в list в DOM
list.append(...allIngredients);