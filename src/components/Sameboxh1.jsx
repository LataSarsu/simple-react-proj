import React from "react";

const Sameboxh1 = ({ val1, val2, val3 }) => {
  let winVal;
  if ((val1 === val2) === val3) {
    winVal = "Roll the same number! You Win!";
  } else {
    winVal = "Roll the same number!";
  }
  return (
    <div>
      <h2>{winVal}</h2>
    </div>
  );
};

export default Sameboxh1;
