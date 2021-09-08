import { apiGet, apiPost } from './api.js';

const displayComments = (commentDiv, comments) => {
  if (comments.length >= 1) {
    commentDiv.innerHTML = '';
    comments.forEach((element) => {
      const comP = document.createElement('p');
      comP.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
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

  const html = `
    <i class="far fa-window-close" id = "closeBtn"></i>
        <img src="${meal.strMealThumb}" class = "imgPop"alt="">
        <div class="d-flex justify-content-around"><span>meal type: ${meal.strMeal}</span>
        <span>category: ${meal.strCategory}</span></div>
        <div class="d-flex justify-content-around"><span>video link:<a href="${meal.strYoutube}" >video</a> </span>
        <span>tags: ${meal.strTags}</span></div>
        <h3>Comments(2)</h3>
       <div id = ${meal.idMeal}></div>
        <form id = ${formId}>
          <div class="form-group mt-2">
          <input type="text" class="form-sm-control" id = ${userId} required>
          </div>
          <div class="form-group mt-3">
          <input type="text" class="form-sm-control" id = ${commentId} required>
          </div>
          <button class="btn btn-dark mt-2">comment</button>
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
};
export const getMealRecipe = (idMeal) => {
  apiGet(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((data) => {
      apiGet(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5UpYqnub5KIZMG9nlN2D/comments?item_id=${idMeal}`).then((comments) => { mealRecipeModal(data.meals[0], comments); });
    });
};

export default mealRecipeModal;