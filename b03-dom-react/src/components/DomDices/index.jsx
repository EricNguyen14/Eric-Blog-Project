import { useState } from "react";
import "./DomDice.css";
function DomDices() {
  const elDice1 = document.getElementById("dice-1");
  const elDice2 = document.getElementById("dice-2");
  const [imgDices, setImgDices] = useState([
    "dice1@2x.png",
    "dice2@2x.png",
    "dice3@2x.png",
    "dice4@2x.png",
    "dice5@2x.png",
    "dice6@2x.png",
  ]);

  handleRollDice();

  function handleRollDice() {
    const idx1 = randomIdx();
    const idx2 = randomIdx();

    const dice1 = imgDices[idx1];
    const dice2 = imgDices[idx2];

    elDice1.src = "./images/" + dice1;
    elDice2.src = "./images/" + dice2;
  }

  function randomIdx() {
    return Math.floor(Math.random() * 6);
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="./images/diceeLogo@2x.png" alt="" />
        </div>
        <div id="list-dice" className="list-dice">
          <img id="dice-1" src="./images/dice6@2x.png" alt="" />
          <img id="dice-2" src="./images/dice3@2x.png" alt="" />
        </div>
        <button className="roll-dice" onlick={handleRollDice}>
          Roll Dice
        </button>
      </div>
    </>
  );
}

export default DomDices;
