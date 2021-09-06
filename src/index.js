import 'lodash';
import  './style.css';
import { displayCards } from './home.js';
import { apiGet } from './api.js' 

//Home page
const urlFood = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const seafood = document.getElementById('seafood');
const lamb = document.getElementById('lamb');
const dessert = document.getElementById('dessert');
const seafood_link = document.getElementById('seafoodlink');
const lamb_link = document.getElementById('lamblink');
const dessert_link = document.getElementById('dessertlink');

apiGet(`${urlFood}?c=Seafood`).then((response) => {
  displayCards(seafood, response.meals);
});

apiGet(`${urlFood}?c=Lamb`).then((response) => {
  displayCards(lamb, response.meals);
});

apiGet(`${urlFood}?c=Dessert`).then((response) => {
  displayCards(dessert, response.meals);
});

seafood_link.addEventListener('click', () => {
  seafood.style.display = 'flex';
  lamb.style.display = 'none';
  dessert.style.display = 'none';
});

lamb_link.addEventListener('click', () => {
  lamb.style.display = 'flex';
  seafood.style.display = 'none';
  dessert.style.display = 'none';
});

dessert_link.addEventListener('click', () => {
  dessert.style.display = 'flex';
  lamb.style.display = 'none';
  seafood.style.display = 'none';
});

//Home page end

function component() {
  const element = document.createElement('div');
  return element;
}


document.body.appendChild(component());