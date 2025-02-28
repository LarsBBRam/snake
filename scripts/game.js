//here the proper game loop runs

import {
  draw as drawSnake,
  update as updateSnake,
  snakeSpeed,
  snakeCrash,
  getSnakeHead,
} from "./snake.js"; //fetches the snake speed from snake.js
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
//this is our game loop main function

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById(`game-board`);

function main(currentTime) {
  // if(gameOver) {
  //     if(confirm(`You lost. Press ok to restart.`)){
  //         window.location = `/`
  //     }
  //     return
  // }
  if (gameOver) {
    return alert(`you lose`);
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}
window.requestAnimationFrame(main);

let update = () => {
  updateSnake();
  updateFood();
  checkDeath();
};

let draw = () => {
  gameBoard.innerHTML = ``;
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead) || snakeCrash();
}
