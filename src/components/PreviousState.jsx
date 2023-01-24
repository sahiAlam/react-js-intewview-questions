import React, { useState } from "react";

const PreviousState = () => {
  const [count, setCount] = useState(0);

  const rand = Math.ceil(Math.random() * 10);
  const countUpdate = () => {
    setCount((prevCount) => {
      console.log(prevCount);
      return rand;
    });
  };
  return (
    <>
      <p>{`Current State : ${count}`}</p>
      <button onClick={countUpdate}>Update Count</button>
    </>
  );
};

export default PreviousState;