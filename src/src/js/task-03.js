const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//достукуємося до ul
const container = document.querySelector('.gallery');
//створюємо розмітку. Спочатку за допомогою map перебираємо масив images, потім деструктуризуємо url і alt, щоб ми могли легше їх використовувати. Робимо за доп шаблонного рядка. map повертає масив, треьа привести до рядка, щоб використати insertAdjacentHTML
const marcup = images.map(({ url, alt }) =>
  `<li>
  <img src="${url}" alt="${alt}" class ="item-images" width="400" height="400">
   </li>`
).join('');
console.dir(marcup);
//додаємо в DOM
container.insertAdjacentHTML('beforeend', marcup);