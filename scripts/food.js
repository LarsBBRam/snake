import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
};
let food = getRandomFoodPosition();
const expansion_rate = 1;

export let update = () => {
  if (onSnake(food)) {
    expandSnake(expansion_rate);
    food = getRandomFoodPosition();
  }
};

export let draw = (gameBoard) => {
  const foodElement = document.createElement(`div`);
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};
