import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Box = ({ onSet }) => {
  // const [value, setValue] = useState(randomIntFromInterval(1, 6));
  // let rndInt = randomIntFromInterval(1, 6);
  // let rndInt1 = randomIntFromInterval(1, 6);
  // var winVal;
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  onSet = (val1, val2) => {
    if (val1 < 4 && val2 < 4) {
      const winVal = "You win!";
      return winVal;
    }
  };
  return (
    <>
      <div>
        <h1>Roll less than 4 {winVal}</h1>
        <div className="bigBox">
          <p className="smallBox">{val1}</p>
          <p className="smallBox">{val2}</p>
        </div>
        <button
          className="bbtn"
          onClick={(setVal1 = () => {
            val1 = randomIntFromInterval(1, 6);
          })(
            (setVal2 = () => {
              val2 = randomIntFromInterval(1, 6);
            })
          )}
        >
          Re-roll
        </button>
      </div>
    </>
  );
};

export default Box;
