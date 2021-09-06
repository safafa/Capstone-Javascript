const displayDish = (dish) => {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h5');
    const likeB = document.createElement('button');
    const button = document.createElement('button');
    image.setAttribute('src',dish.strMealThumb);
    name.innerText = dish.strMeal;
    likeB.setAttribute('class', 'far fa-heart');
    button.innerText = 'Comments';
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(likeB);
    card.appendChild(button);
    return card;
}

export const displayCards = (section,dishes) => {
    dishes.forEach((dish) => {
        section.appendChild(displayDish(dish));
    });
} 