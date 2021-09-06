import 'lodash';
import  './style.css';
import { displayCards } from './home.js';
import { apiPost, apiGet } from './api.js' 

const seafood = document.getElementById('seafood');
const lamb = document.getElementById('lamb');
const dessert = document.getElementById('dessert');

apiGet('c=Seafood').then((response) => {
  displayCards(seafood, response.meals);
});

apiGet('c=Lamb').then((response) => {
  displayCards(lamb, response.meals);
});

apiGet('c=Dessert').then((response) => {
  displayCards(dessert, response.meals);
});

function component() {
  const element = document.createElement('div');
  return element;
}


document.body.appendChild(component());