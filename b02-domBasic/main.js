function getRandomInt1(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rollDice = document.getElementById("list-dice");
const funcRollDice = () => {
  document.getElementById("dice-1").src =
    `./images/dice` + getRandomInt1(1, 6) + `@2x.png`;
  document.getElementById("dice-2").src =
    `./images/dice` + getRandomInt2(1, 6) + `@2x.png`;
};
