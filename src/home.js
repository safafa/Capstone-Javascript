import { getMealRecipe } from './comment.js';

import { apiPost, apiGet } from './api.js';

const envolevementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5UpYqnub5KIZMG9nlN2D';

const showLikes = (response, span, idMeal) => {
  const data = response.filter((item) => item.item_id === idMeal);
  if (data.length !== 0) {
    span.innerText = `${data[0].likes} likes`;
  } else {
    span.innerText = '0 likes';
  }
};

const updateLikes = async (span, idMeal) => {
  apiGet(`${envolevementUrl}/likes`).then((response) => {
    showLikes(response, span, idMeal);
  });
};

const displayDish = (dish, likes) => {
  const { idMeal, strMeal, strMealThumb } = dish;
  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h5');
  const likeB = document.createElement('button');
  const nameLike = document.createElement('div');
  const likeSpan = document.createElement('span');
  const button = document.createElement('button');
  const reservation = document.createElement('button');
  card.setAttribute('data-id', idMeal);
  image.setAttribute('src', strMealThumb);
  name.innerText = dish.strMeal;
  image.setAttribute('src', strMealThumb);
  name.innerText = strMeal;
  likeB.setAttribute('class', 'far fa-heart like');
  button.innerText = 'Comments';
  reservation.innerText = 'Reservations';
  button.setAttribute('class', 'btn comments-button');
  reservation.setAttribute('class', 'btn comments-button');
  card.appendChild(image);
  nameLike.appendChild(name);
  nameLike.appendChild(likeB);
  nameLike.setAttribute('class', 'name-like flex');
  card.appendChild(nameLike);
  showLikes(likes, likeSpan, idMeal);
  likeSpan.setAttribute('class', 'likes');
  likeB.addEventListener('click', async () => {
    likeSpan.innerText = 'likes';
    apiPost(`${envolevementUrl}/likes`, {
      item_id: idMeal,
    }).then(() => {
      updateLikes(likeSpan, idMeal);
    });
  });
  card.appendChild(likeSpan);
  card.appendChild(button);
  card.appendChild(reservation);
  card.setAttribute('class', 'card flex');
  button.addEventListener('click', () => {
    getMealRecipe(idMeal);
  });

  return card;
};

export default (section, dishes) => {
  apiGet(`${envolevementUrl}/likes`).then((response) => {
    dishes.forEach((dish) => {
      section.appendChild(displayDish(dish, response));
    });
  });
};