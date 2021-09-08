import { apiGet } from './api.js';

const mealRecipeModal = (meal) => {
  const popSec = document.querySelector('.popUp');
  const html = `
    <i class="far fa-window-close" id = "closeBtn"></i>
        <img src="${meal.strMealThumb}" class = "imgPop"alt="">
        <div class="d-flex justify-content-around"><span>meal type: ${meal.strMeal}</span>
        <span>category: ${meal.strCategory}</span></div>
        <div class="d-flex justify-content-around"><span>video link:<a href="${meal.strYoutube}" >video</a> </span>
        <span>tags: ${meal.strTags}</span></div>
        <h3>Comments(2)</h3>
        <p> Date name: comments</p>
        <p>Date name: comments</p>
        <form>
          <div class="form-group mt-2">
          <input type="text" class="form-sm-control">
          </div>
          <div class="form-group mt-3">
          <input type="text" class="form-sm-control">
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
};
export const getMealRecipe = (idMeal) => {
  apiGet(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((data) => { mealRecipeModal(data.meals[0]); });
};

export default mealRecipeModal;