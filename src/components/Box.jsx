import React from "react";
import { useState } from "react";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Box = () => {
  const [value, setValue] = useState(randomIntFromInterval(1, 6));
  let rndInt = randomIntFromInterval(1, 6);
  let rndInt1 = randomIntFromInterval(1, 6);
  var winVal;

  return (
    <>
      <div className="bigBox">
        <p className="smallBox">{value}</p>
        <p className="smallBox">{rndInt1}</p>
      </div>
      <button
        className="bbtn"
        onClick={
          (setValue = () => {
            rndInt = randomIntFromInterval(1, 6);
            rndInt1 = randomIntFromInterval(1, 6);
            if ({ rndInt } < 4 && { rndInt1 } < 4) {
              winVal = "You Win!";
              return winVal;
            }
          })
        }
      >
        Re-roll
      </button>
    </>
  );
};

export default Box;
