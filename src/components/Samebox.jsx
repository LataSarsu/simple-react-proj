import React from "react";
import { useState } from "react";
import Sameboxh1 from "./Sameboxh1";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Samebox = () => {
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(2);
  const [val3, setVal3] = useState(3);

  return (
    <>
      <Sameboxh1 val1={val1} val2={val2} val3={val3} />
      <div className="bigBox">
        <p className="smallBox">{val1}</p>
        <p className="smallBox">{val2}</p>
        <p className="smallBox">{val3}</p>
      </div>
      <button
        className="bbtn"
        onClick={() => {
          setVal1(randomIntFromInterval(1, 6)),
            setVal2(randomIntFromInterval(1, 6));
          setVal3(randomIntFromInterval(1, 6));
        }}
      >
        Re-roll
      </button>
    </>
  );
};

export default Samebox;
