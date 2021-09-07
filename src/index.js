import 'lodash';
import './style.css';

import displayCards from './home.js';
import { apiGet } from './api.js';
import dishCounter from './homeCounter.js';

// Home page
const urlFood = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const seafood = document.getElementById('seafood');
const lamb = document.getElementById('lamb');
const dessert = document.getElementById('dessert');
const seafoodLink = document.getElementById('seafoodlink');
const lambLink = document.getElementById('lamblink');
const dessertLink = document.getElementById('dessertlink');

apiGet(`${urlFood}?c=Seafood`).then((response) => {
  const number = dishCounter(response.meals);
  const header = document.createElement('h5');
  const container = document.createElement('div');
  container.setAttribute('class', 'category flex');
  header.innerText = `${number} dishes`;
  seafood.appendChild(header);
  displayCards(container, response.meals);
  seafood.appendChild(container);
});

apiGet(`${urlFood}?c=Lamb`).then((response) => {
  const number = dishCounter(response.meals);
  const header = document.createElement('h5');
  const container = document.createElement('div');
  container.setAttribute('class', 'category flex');
  header.innerText = `${number} dishes`;
  lamb.appendChild(header);
  displayCards(container, response.meals);
  lamb.appendChild(container);
});

apiGet(`${urlFood}?c=Dessert`).then((response) => {
  const number = dishCounter(response.meals);
  const header = document.createElement('h5');
  const container = document.createElement('div');
  container.setAttribute('class', 'category flex');
  header.innerText = `${number} dishes`;
  dessert.appendChild(header);
  displayCards(container, response.meals);
  dessert.appendChild(container);
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
