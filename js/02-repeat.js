const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  const list = document.querySelector('#ingredients')
  console.log(list);

const createsLi = ingredients.map((item)=> {

const itemOfList = document.createElement('li')

itemOfList.classList.add(item)
itemOfList.textContent = item;

return itemOfList
  })

list.append(...createsLi)