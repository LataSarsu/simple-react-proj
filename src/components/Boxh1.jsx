import React from "react";

const Boxh1 = ({ val1, val2 }) => {
  let winVal;
  if (val1 < 4 && val2 < 4) {
    winVal = "Roll less than 4! You Win!";
  } else {
    winVal = "Roll less than 4!";
  }
  return (
    <div>
      <h2>{winVal}</h2>
    </div>
  );
};

export default Boxh1;
