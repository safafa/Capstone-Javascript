const displayDish = (dish) => {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h5');
  const likeB = document.createElement('button');
  const nameLike = document.createElement('div');
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
  card.appendChild(button);
  card.appendChild(reservation);
  card.setAttribute('class', 'card flex');
  return card;
}

export const displayCards = (section, dishes) => {
  dishes.forEach((dish) => {
    section.appendChild(displayDish(dish));
  });
};