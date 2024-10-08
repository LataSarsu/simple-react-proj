import React from "react";
import { useState } from "react";
import Boxh1 from "./Boxh1";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Box = () => {
  const [val1, setVal1] = useState(4);
  const [val2, setVal2] = useState(4);

  return (
    <>
      <Boxh1 val1={val1} val2={val2} />
      <div className="bigBox">
        <p className="smallBox">{val1}</p>
        <p className="smallBox">{val2}</p>
      </div>
      <button
        className="bbtn"
        onClick={() => {
          setVal1(randomIntFromInterval(1, 6)),
            setVal2(randomIntFromInterval(1, 6));
        }}
      >
        Re-roll
      </button>
    </>
  );
};

export default Box;
