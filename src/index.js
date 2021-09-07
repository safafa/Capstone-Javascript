import 'lodash';
import './style.css';
import { displayCards } from './home.js';
import { apiGet } from './api.js';

// Home page
const urlFood = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const seafood = document.getElementById('seafood');
const lamb = document.getElementById('lamb');
const dessert = document.getElementById('dessert');
const seafoodLink = document.getElementById('seafoodlink');
const lambLink = document.getElementById('lamblink');
const dessertLink = document.getElementById('dessertlink');

apiGet(`${urlFood}?c=Seafood`).then((response) => {
  displayCards(seafood, response.meals);
});

apiGet(`${urlFood}?c=Lamb`).then((response) => {
  displayCards(lamb, response.meals);
});

apiGet(`${urlFood}?c=Dessert`).then((response) => {
  displayCards(dessert, response.meals);
});

seafoodLink.addEventListener('click', () => {
  seafood.style.display = 'flex';
  lamb.style.display = 'none';
  dessert.style.display = 'none';
});

lambLink.addEventListener('click', () => {
  lamb.style.display = 'flex';
  seafood.style.display = 'none';
  dessert.style.display = 'none';
});

dessertLink.addEventListener('click', () => {
  dessert.style.display = 'flex';
  lamb.style.display = 'none';
  seafood.style.display = 'none';
});

// Home page end
