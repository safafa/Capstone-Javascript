import { apiGet } from '../api.js';
/* eslint-disable */
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ "meals": [{
        "strMeal": "Baingan Bharta",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
        "idMeal": "52807"
    },
    {
        "strMeal": "Chicken Handi",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
        "idMeal": "52795"
    },
    {
        "strMeal": "Dal fry",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
        "idMeal": "52785"
    },
    ] }),
  })
);

global.dishes = [{
    "strMeal": "Baingan Bharta",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    "idMeal": "52807"
},
{
    "strMeal": "Chicken Handi",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    "idMeal": "52795"
},
{
    "strMeal": "Dal fry",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    "idMeal": "52785"
},
]
/* eslint-enable */
describe('apiGet Method', () => {
    test('it returns the correct number of dishes', () => {
        expect(apiGet('https://www.themealdb.com/api/json/v1/1/filter.php')).resolves.toBe(dishes);
        expect(fetch).toHaveBeenCalledTimes(1);
      });
});