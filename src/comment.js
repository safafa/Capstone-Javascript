import { apiGet, apiPost } from './api.js';
import counter from './homeCounter.js';

const displayComments = (commentDiv, comments) => {
  if (comments.length >= 1) {
    commentDiv.innerHTML = '';
    comments.forEach((element) => {
      const comP = document.createElement('div');
      comP.classList.add('commentOutput');
      comP.innerHTML = `<span class= 'span'>${element.creation_date}</span><span class= 'span'> from:<strong>${element.username}</strong></span> <span class= 'span'> ${element.comment}</span>`;
      commentDiv.appendChild(comP);
    });
  }
};

const postComment = async (commentDiv, comment) => {
  apiPost('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5UpYqnub5KIZMG9nlN2D/comments', comment)
    .then(() => {
      apiGet(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5UpYqnub5KIZMG9nlN2D/comments?item_id=${comment.item_id}`).then((comments) => { displayComments(commentDiv, comments); });
    });
};

const mealRecipeModal = (meal, comments) => {
  const popSec = document.querySelector('.popUp');
  const userId = meal.idMeal + 1;
  const commentId = meal.idMeal + 2;
  const formId = meal.idMeal + 3;
  const badgeId = meal.idMeal + 4;

  const html = `
    <i class="far fa-window-close closeBtn" id = "closeBtn"></i>
        <img src="${meal.strMealThumb}" class = "imgPop" alt="meal">
        <div class="properties"><span class='span1'>meal type: ${meal.strMeal}</span>
        <span span1>category: ${meal.strCategory}</span></div>
        <div class="properties"><span span1>video link:<a href="${meal.strYoutube}"  class = 'link'>watch ideo</a> </span>
        <span span1>tags: ${meal.strIngredient1}, ${meal.strIngredient2} </span></div>
        <h3>Comments<span class="badge" id=${badgeId}>0</span></h3>
       <div class = "overflow" id = ${meal.idMeal}></div>
        <form id = ${formId}>
          <div class="form-group mt-2">
          <input type="text" class="form-control w-50 m-auto" id = ${userId}  placeholder = "your username" required>
          </div>
          <div class="form-group mt-3">
          <input type="text" class="form-control w-50 m-auto" id = ${commentId} maxlength="10" placeholder = "your comment" required>
          </div>
          <button class="btn comments-button mt-2 w-25">comment</button>
        </form>
`;
  popSec.innerHTML = html;
  popSec.style.display = 'grid';
  const closeBtn = document.querySelector('#closeBtn');
  closeBtn.addEventListener('click', () => {
    popSec.style.display = 'none';
  });
  const commentDiv = document.getElementById(meal.idMeal);
  displayComments(commentDiv, comments);
  const form = document.getElementById(formId);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById(userId);
    const userComm = document.getElementById(commentId);
    postComment(commentDiv, {
      item_id: meal.idMeal,
      username: userName.value,
      comment: userComm.value,
    });
    form.reset();
  });
  const badge = document.getElementById(badgeId);
  badge.innerHTML = counter(comments);
};
export const getMealRecipe = (idMeal) => {
  apiGet(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((data) => {
      apiGet(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5UpYqnub5KIZMG9nlN2D/comments?item_id=${idMeal}`).then((comments) => { mealRecipeModal(data.meals[0], comments); });
    });
};

export default mealRecipeModal;