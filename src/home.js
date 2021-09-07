import { apiGet } from './api.js';

const envolevementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5UpYqnub5KIZMG9nlN2D';

const showLikes = (response, span, idMeal) => {
  const data = response.filter((item) => item.item_id === idMeal);
  if (data.length !== 0) {
    span.innerText = `${data[0].likes} likes`;
  } else {
    span.innerText = '0 likes';
  }
};

const displayDish = (dish) => {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h5');
  const likeB = document.createElement('button');
  const nameLike = document.createElement('div');
  const likeSpan = document.createElement('span');
  const button = document.createElement('button');
  const reservation = document.createElement('button');
  image.setAttribute('src', dish.strMealThumb);
  name.innerText = dish.strMeal;
  likeB.setAttribute('class', 'far fa-heart like');
  button.innerText = 'Comments';
  reservation.innerText = 'Reservations';
  button.setAttribute('class', 'comments-button');
  reservation.setAttribute('class', 'comments-button');
  card.appendChild(image);
  nameLike.appendChild(name);
  nameLike.appendChild(likeB);
  nameLike.setAttribute('class', 'name-like flex');
  card.appendChild(nameLike);
  apiGet(`${envolevementUrl}/likes`).then((response) => {
    showLikes(response, likeSpan, dish.idMeal);
  });
  likeSpan.setAttribute('class', 'likes');
  card.appendChild(likeSpan);
  card.appendChild(button);
  card.appendChild(reservation);
  card.setAttribute('class', 'card flex');
  return card;
};

export default (section, dishes) => {
  dishes.forEach((dish) => {
    section.appendChild(displayDish(dish));
  });
};