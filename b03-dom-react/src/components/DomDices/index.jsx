import { useState } from "react";
import imgDice1 from "./images/dice1@2x.png";
import imgDice2 from "./images/dice2@2x.png";
import imgDice3 from "./images/dice3@2x.png";
import imgDice4 from "./images/dice4@2x.png";
import imgDice5 from "./images/dice5@2x.png";
import imgDice6 from "./images/dice6@2x.png";
import "./DomDice.css";

const imgDices = [imgDice1, imgDice2, imgDice3, imgDice4, imgDice5, imgDice6];

function DomDices() {
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);

  function handleRollDice() {
    setIdx1(randomIdx());
    setIdx2(randomIdx());
  }

  function randomIdx() {
    return Math.floor(Math.random() * 6);
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="./images/diceeLogo@2x.png" alt="" />
      </div>
      <div id="list-dice" className="list-dice">
        <img id="dice-1" src={imgDices[idx1]} alt="" />
        <img id="dice-2" src={imgDices[idx2]} alt="" />
      </div>
      <button className="roll-dice" onClick={handleRollDice}>
        Roll Dice
      </button>
    </div>
  );
}

export default DomDices;
