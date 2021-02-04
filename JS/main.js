"use strict";

const inputBottonElement = document.querySelector(".js-inputbtn");
const inputValueElement = document.querySelector(".js-inputvalue");
const boxPistaElement = document.querySelector(".js-pista");
const counterElement = document.querySelector(".js-counter");

function numberGame() {
  handleUpdateBtn();
  incrementCounter();
}
const incrementCounter = () => {
  let inputCounter = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = inputCounter + 1;
  console.log(inputCounter);
};

function handleUpdateBtn() {
  const inputValue = parseInt(inputValueElement.value);

  if (inputValue > 100 || inputValue < 1) {
    boxPistaElement.innerHTML = "El numero debe estar entre 1 y 100";
  } else if (inputValue > randomNumber) {
    boxPistaElement.innerHTML = "Demasiado alto";
  } else if (inputValue < randomNumber) {
    boxPistaElement.innerHTML = "Demasiado bajo";
  } else {
    boxPistaElement.innerHTML = "Has ganado campeona";
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

inputBottonElement.addEventListener("click", numberGame);
