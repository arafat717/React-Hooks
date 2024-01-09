import React, { useState } from "react";

const Another = () => {
  const [counter, setCounter] = useState(0);
  console.log("hossen");
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter((prvStatus) => prvStatus + 1)}
        className="btn"
      >
        increment
      </button>
      <button onClick={() => setCounter(0)} className="btn">
        reset
      </button>
      <button
        onClick={() => setCounter((prvStatus) => prvStatus - 1)}
        className="btn"
      >
        dicrement
      </button>
    </div>
  );
};

export default Another;
